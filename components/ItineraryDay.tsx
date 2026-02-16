import Image from 'next/image'

interface ItineraryDayProps {
  day: number
  title: string
  route: string
  distance: string
  description: string
  highlights: string[]
  sleepSpot: string
  imageSrc?: string
  imageAlt?: string
}

export default function ItineraryDay({
  day,
  title,
  route,
  distance,
  description,
  highlights,
  sleepSpot,
  imageSrc,
  imageAlt,
}: ItineraryDayProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        {imageSrc && (
          <div className="lg:w-2/5 relative h-64 lg:h-auto">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">J{day}</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`p-6 md:p-8 ${imageSrc ? 'lg:w-3/5' : 'w-full'}`}>
          {!imageSrc && (
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">J{day}</span>
            </div>
          )}

          <h3 className="text-xl md:text-2xl font-serif font-bold text-emerald-900 mb-2">
            {title}
          </h3>

          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{route}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>{distance}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>

          <div className="mb-4">
            <h4 className="font-semibold text-emerald-800 mb-2">Points d'intérêt :</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-sand-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span className="text-sm text-emerald-700">
              <strong>Nuit :</strong> {sleepSpot}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
