interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variant?: 'default' | 'horizontal' | 'centered'
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
}: FeatureCardProps) {
  if (variant === 'horizontal') {
    return (
      <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 text-emerald-600">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    )
  }

  if (variant === 'centered') {
    return (
      <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-5">
          <div className="w-8 h-8 text-emerald-600">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
        <div className="w-6 h-6 text-emerald-600">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
