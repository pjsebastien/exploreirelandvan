import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  author: string
  location?: string
  rating?: number
  imageSrc?: string
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative">
      {/* Quote mark */}
      <div className="absolute top-4 right-4 text-emerald-100">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-sand-400' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={author}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <span className="text-emerald-600 font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-emerald-900">{author}</p>
          {location && (
            <p className="text-sm text-gray-500">{location}</p>
          )}
        </div>
      </div>
    </div>
  )
}
