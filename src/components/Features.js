/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon, GlobeAltIcon, ChartPieIcon, LightBulbIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Webb apps',
    description:
      "Deploying a full-stack machine learning web application using FastApi, Postgres, React, Docker and Kubernetes. ",
      icon: GlobeAltIcon,
  },
  {
    name: 'Fundamental reserach',
    description:
      'Creating mathematical theory of dynamic graphs and adding machine learning capabilities with Pytorch.',
    icon: LightBulbIcon,
  },
  {
    name: 'Data analysis',
    description:
      'Analysis and visualization of high-dimensional time series data with Python/Pytorch (ARIMA-GARCH, LSTM, XGBoost, GPT, BERT, PPO2, NLopt).',
    icon: ChartPieIcon,
  },
  {
    name: 'Communication skills',
    description:
      'Tutoring undergraduate and graduate students, giving technical presentation and publishing in a peer-reviewed journals.',
    icon: UsersIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Programming and science
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Modern full stack application which will bring your data to life.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}