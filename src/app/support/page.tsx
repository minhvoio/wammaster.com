import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Support() {
  return (
    <>
      <div className="bg-bgPrimary h-screen flex-1">
        <div className="mx-auto flex h-screen w-4/5 items-center">
          <div className="flex-col space-y-6">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="text-2xl">
              Contact me at{' '}
              <a href="mailto:minhvo.business@gmail.com" className="text-bg2">
                minhvo.business@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
