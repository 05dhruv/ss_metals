import { getProduct, getProducts } from '@/lib/queries';
import ConfirmButton from '@/components/ConfirmButton';
import SmartImage from '@/components/SmartImage';
import Link from 'next/link';
import { deleteProduct, saveProduct } from '../../actions';

export default async function AdminProducts({ searchParams }: { searchParams: { edit?: string; saved?: string; error?: string } }) {
  const products = await getProducts({ includeInactive: true });
  const editing = searchParams.edit ? await getProduct(parseInt(searchParams.edit, 10)) : undefined;
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const specsText = editing ? Object.entries(editing.specs).map(([k, v]) => `${k}: ${v}`).join('\n') : '';

  return (
    <>
      <h1 className="font-display text-3xl font-bold">Products</h1>
      {searchParams.saved && <p className="mt-3 rounded bg-emerald-100 p-3 text-sm text-emerald-900" role="status">Saved.</p>}
      {searchParams.error && <p className="mt-3 rounded bg-red-100 p-3 text-sm text-red-900" role="alert">{searchParams.error}</p>}

      <form key={editing?.id ?? 'new'} action={saveProduct} className="mt-5 rounded border border-steel-200 bg-white p-5">
        <h2 className="font-display text-xl font-semibold">{editing ? `Edit: ${editing.name}` : 'Add a product'}</h2>
        <input type="hidden" name="id" value={editing?.id ?? ''} />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div><label className="label" htmlFor="name">Name *</label><input id="name" name="name" required defaultValue={editing?.name} className="field" /></div>
          <div>
            <label className="label" htmlFor="category">Category *</label>
            <input id="category" name="category" required list="cats" defaultValue={editing?.category} className="field" />
            <datalist id="cats">{categories.map((c) => <option key={c} value={c} />)}</datalist>
          </div>
          <div className="md:col-span-2"><label className="label" htmlFor="description">Description</label><textarea id="description" name="description" rows={2} defaultValue={editing?.description} className="field" /></div>
          <div className="md:col-span-2">
            <label className="label" htmlFor="specs">Specifications (one per line, as &quot;Name: value&quot;)</label>
            <textarea id="specs" name="specs" rows={4} defaultValue={specsText} className="field font-mono" placeholder={'Material: SS 304\nCapacity: 300 ml'} />
          </div>
          <div>
            <label className="label" htmlFor="image">Upload image (JPG, PNG, WEBP, max 5 MB)</label>
            <input id="image" name="image" type="file" accept="image/*" className="field" />
          </div>
          <div>
            <label className="label" htmlFor="image_url">...or image URL / path</label>
            <input id="image_url" name="image_url" defaultValue={editing?.image_url ?? ''} className="field" placeholder="/img/popular/taper-mug.jpg" />
          </div>
          <div><label className="label" htmlFor="sort_order">Sort order (lower shows first)</label><input id="sort_order" name="sort_order" type="number" defaultValue={editing?.sort_order ?? 0} className="field" /></div>
          <div className="flex items-end gap-6 pb-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" name="is_popular" defaultChecked={editing?.is_popular ?? false} /> Show on home page</label>
            <label className="flex items-center gap-2"><input type="checkbox" name="is_active" defaultChecked={editing?.is_active ?? true} /> Visible on site</label>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="btn btn-primary">{editing ? 'Save changes' : 'Add product'}</button>
          {editing && <Link href="/admin/products" className="btn btn-outline">Cancel</Link>}
        </div>
      </form>

      <div className="mt-8 overflow-x-auto rounded border border-steel-200 bg-white">
        <table className="min-w-full divide-y divide-steel-200">
          <thead><tr><th className="th">Image</th><th className="th">Name</th><th className="th">Category</th><th className="th">Flags</th><th className="th">Order</th><th className="th"><span className="sr-only">Actions</span></th></tr></thead>
          <tbody className="divide-y divide-steel-100">
            {products.map((p) => (
              <tr key={p.id}>
                <td className="td"><SmartImage src={p.image_url} alt={p.name} className="h-12 w-12 rounded" /></td>
                <td className="td font-medium">{p.name}</td>
                <td className="td">{p.category}</td>
                <td className="td space-x-1">
                  {p.is_popular && <span className="badge bg-brass-light text-brass-dark">Home</span>}
                  {!p.is_active && <span className="badge bg-steel-200 text-steel-700">Hidden</span>}
                </td>
                <td className="td">{p.sort_order}</td>
                <td className="td">
                  <div className="flex justify-end gap-3 text-sm font-semibold">
                    <Link href={`/admin/products?edit=${p.id}`} className="text-brand hover:underline">Edit</Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={p.id} />
                      <ConfirmButton message={`Delete "${p.name}"?`} className="text-red-700 hover:underline">Delete</ConfirmButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
