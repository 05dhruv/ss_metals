import { getCounts, getEnquiries } from '@/lib/queries';
import ConfirmButton from '@/components/ConfirmButton';
import { deleteEnquiry, setEnquiryStatus } from '../actions';

const BADGE = { new: 'bg-red-100 text-red-800', contacted: 'bg-amber-100 text-amber-800', closed: 'bg-emerald-100 text-emerald-800' };

export default async function AdminEnquiries() {
  const [counts, rows] = await Promise.all([getCounts(), getEnquiries()]);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ['New enquiries', counts.new_enquiries],
          ['All enquiries', counts.enquiries],
          ['Products', counts.products],
          ['Stock rows', counts.stock],
        ].map(([l, v]) => (
          <div key={l} className="rounded border border-steel-200 bg-white p-4">
            <p className="font-display text-4xl font-bold text-brand">{v}</p>
            <p className="text-sm text-steel-700">{l}</p>
          </div>
        ))}
      </div>

      <h1 className="mt-8 font-display text-3xl font-bold">Enquiries</h1>
      {rows.length === 0 ? (
        <p className="mt-4 rounded border border-dashed border-steel-300 bg-white p-8 text-center text-steel-700">
          No enquiries yet. They appear here when someone submits the contact form.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {rows.map((e) => (
            <article key={e.id} className="rounded border border-steel-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="font-semibold">{e.name}{e.company && <span className="font-normal text-steel-500"> · {e.company}</span>}</h2>
                  <p className="text-sm">
                    {e.phone && <a href={`tel:${e.phone}`} className="text-brand hover:underline">{e.phone}</a>}
                    {e.phone && e.email && ' · '}
                    {e.email && <a href={`mailto:${e.email}`} className="text-brand hover:underline">{e.email}</a>}
                  </p>
                </div>
                <div className="text-right text-xs text-steel-500">
                  <span className={`badge ${BADGE[e.status]}`}>{e.status}</span>
                  <p className="mt-1">{new Date(e.created_at).toLocaleString('en-IN')}</p>
                </div>
              </div>
              {e.product_interest && <p className="mt-2 text-sm"><span className="font-medium">Interested in:</span> {e.product_interest}</p>}
              <p className="mt-2 whitespace-pre-wrap text-sm text-steel-700">{e.message}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {(['new', 'contacted', 'closed'] as const).filter((s) => s !== e.status).map((s) => (
                  <form key={s} action={setEnquiryStatus}>
                    <input type="hidden" name="id" value={e.id} /><input type="hidden" name="status" value={s} />
                    <button className="btn btn-outline !px-3 !py-1.5">Mark {s}</button>
                  </form>
                ))}
                <form action={deleteEnquiry}>
                  <input type="hidden" name="id" value={e.id} />
                  <ConfirmButton message="Delete this enquiry permanently?" className="btn btn-outline !px-3 !py-1.5 text-red-700">Delete</ConfirmButton>
                </form>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
