interface PriceRow {
  vehicle: string
  capacity: string
  equipment: string
  priceRange: string
}

interface PriceTableProps {
  title?: string
  rows: PriceRow[]
}

export default function PriceTable({ title, rows }: PriceTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {title && (
        <div className="bg-emerald-600 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}
      <div className="table-responsive">
        <table className="table-custom">
          <thead>
            <tr>
              <th>Véhicule</th>
              <th>Capacité</th>
              <th>Équipements</th>
              <th>Prix/jour</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="font-medium text-emerald-900">{row.vehicle}</td>
                <td>{row.capacity}</td>
                <td className="text-sm">{row.equipment}</td>
                <td className="font-semibold text-emerald-600">{row.priceRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
