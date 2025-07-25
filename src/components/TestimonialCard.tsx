import Image from 'next/image';

export default function TestimonialCard() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <div className="max-w-6xl w-full">
            <div className="bg-white rounded-3xl p-8 lg:p-16 shadow-sm border flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-medium text-gray-800 mb-6">
                  Student to Social Impact Leader
                </h3>
                <p className="text-base lg:text-lg text-gray-600 font-medium leading-relaxed mb-8">
                  Building Bharat transformed the way I learn and think. With hands on projects, expert mentorship, and constant support, I discovered my leadership potential. I never imagined I&#39;d lead initiatives in my own town while learning from top mentors across India. The journey wasn&#39;t easy, but the Building Bharat team made it achievable every step, every doubt, every win was celebrated. If you&#39;re serious about growing and giving back to India, this is where you start.
                </p>
                <div className="text-xl lg:text-2xl text-gray-700">
                  <span className="font-bold text-orange-500">Priya Sharma</span>
                  <span className="font-normal text-black"> </span>
                  <span className="font-normal text-gray-600">Student Leader, Nagpur</span>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ba7055679874bef4a8621edc2db7dfba5627e7cd?width=710"
                  alt="Priya Sharma - Student Leader"
                  width={300}
                  height={340}
                  className="rounded-3xl object-cover lg:w-[355px] lg:h-[403px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
