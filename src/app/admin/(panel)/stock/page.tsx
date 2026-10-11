import Link from 'next/link';
import { getStock, getStockItem } from '@/lib/queries';
import ConfirmButton from '@/components/ConfirmButton';
import { deleteStock, saveStock } from '../../actions';

export default async function AdminStock({ searchParams }: { searchParams: { edit?: string; saved?: string; error?: string } }) {
  const rows = await getStock();
  const editing = searchParams.edit ? await getStockItem(parseInt(searchParams.edit, 10)) : undefined;

  return (
    <>
      <h1 className="font-display text-3xl font-bold">Ready stock</h1>
      <p className="mt-1 text-sm text-steel-700">Update quantities here and the public Ready Stock page changes immediately.</p>
      {searchParams.saved && <p className="mt-3 rounded bg-emerald-100 p-3 text-sm text-emerald-900" role="status">Saved.</p>}
      {searchParams.error && <p className="mt-3 rounded bg-red-100 p-3 text-sm text-red-900" role="alert">{searchParams.error}</p>}

      <form key={editing?.id ?? 'new'} action={saveStock} className="mt-5 rounded border border-steel-200 bg-white p-5">
        <h2 className="font-display text-xl font-semibold">{editing ? `Edit: ${editing.name}` : 'Add a stock row'}</h2>
        <input type="hidden" name="id" value={editing?.id ?? ''} />
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          <div>
            <label className="label" htmlFor="kind">Type</label>
            <select id="kind" name="kind" defaultValue={editing?.kind ?? 'product'} className="field">
              <option value="product">Finished product</option><option value="raw">Raw material</option>
            </select>
          </div>
          <div className="md:col-span-2"><label className="label" htmlFor="name">Item *</label><input id="name" name="name" required defaultValue={editing?.name} className="field" /></div>
          <div><label className="label" htmlFor="category">Category</label><input id="category" name="category" defaultValue={editing?.category} className="field" /></div>
          <div><label className="label" htmlFor="grade">Grade</label><input id="grade" name="grade" defaultValue={editing?.grade} className="field" placeholder="304" /></div>
          <div><label className="label" htmlFor="size">Size</label><input id="size" name="size" defaultValue={editing?.size} className="field" /></div>
          <div><label className="label" htmlFor="quantity">Quantity</label><input id="quantity" name="quantity" type="number" min={0} defaultValue={editing?.quantity ?? 0} className="field" /></div>
          <div><label className="label" htmlFor="unit">Unit</label><input id="unit" name="unit" defaultValue={editing?.unit ?? 'pcs'} className="field" placeholder="pcs / kg / sets" /></div>
          <div><label className="label" htmlFor="low_threshold">Show &quot;low stock&quot; below</label><input id="low_threshold" name="low_threshold" type="number" min={0} defaultValue={editing?.low_threshold ?? 100} className="field" /></div>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="btn btn-primary">{editing ? 'Save changes' : 'Add row'}</button>
          {editing && <Link href="/admin/stock" className="btn btn-outline">Cancel</Link>}
        </div>
      </form>

      <div className="mt-8 overflow-x-auto rounded border border-steel-200 bg-white">
        <table className="min-w-full divide-y divide-steel-200">
          <thead><tr><th className="th">Type</th><th className="th">Item</th><th className="th">Grade</th><th className="th">Size</th><th className="th">Quantity</th><th className="th"><span className="sr-only">Actions</span></th></tr></thead>
          <tbody className="divide-y divide-steel-100">
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="td">{r.kind === 'raw' ? 'Raw' : 'Product'}</td>
                <td className="td font-medium">{r.name}<span className="block text-xs font-normal text-steel-500">{r.category}</span></td>
                <td className="td">{r.grade || '-'}</td>
                <td className="td">{r.size || '-'}</td>
                <td className="td">{r.quantity.toLocaleString('en-IN')} {r.unit}</td>
                <td className="td">
                  <div className="flex justify-end gap-3 text-sm font-semibold">
                    <Link href={`/admin/stock?edit=${r.id}`} className="text-brand hover:underline">Edit</Link>
                    <form action={deleteStock}>
                      <input type="hidden" name="id" value={r.id} />
                      <ConfirmButton message={`Delete "${r.name}"?`} className="text-red-700 hover:underline">Delete</ConfirmButton>
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
