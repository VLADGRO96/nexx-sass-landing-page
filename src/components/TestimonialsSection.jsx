import TagLine from "./TagLine";
import testimonialsImgOne from "../assets/testimonials/1.png";
import testimonialsImgTwo from "../assets/testimonials/2.png";
import testimonialsImgThree from "../assets/testimonials/3.png";
import testimonialsImgFour from "../assets/testimonials/4.png";
import testimonialsImgFive from "../assets/testimonials/5.png";
import testimonialsImgSix from "../assets/testimonials/6.png";
import testimonialsImgSeven from "../assets/testimonials/7.png";
import testimonialsImgEight from "../assets/testimonials/8.png";
import testimonialsImgNine from "../assets/testimonials/9.png";

const TestimonialsSection = () => {
	return (
		<section className="flex items-center justify-center flex-col">
			<TagLine>Testimonials</TagLine>
			<h2 className="text-3xl font-bold text-center mt-3 mb-8">What builders say about us</h2>
			<div className="grid gap-8 grid-cols-1 md:grid-cols-3 items-center max-w-screen-lg text-left">
				<div className="grid gap-4">

					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgOne}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The Al Form Builder has revolutionized
							the way we collect data. It's incredibly
							intuitive and has saved us countless
							hours of manual work. The dynamic form
							adjustments are a game-changer.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgTwo}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>I love the seamless integrations and the
							advanced customization options. It's
							perfect for our growing business needs.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgThree} 
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The security features give me peace of
							mind knowing our data is protected. Plus,
							the support team is always there when
							we need them.</span>
						</p>
					</div>
					
				</div>
				<div className="grid gap-4">

					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgFour}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The analytics and reporting tools provide
							us with valuable insights. We're able to
							make data-driven decisions with ease.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgFive}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The security features give me peace of
							mind knowing our data is protected. Plus,
							the support team is always there when
							we need them.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgSix}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>Scaling our form capabilities as our
							business grows has never been easier.</span>
						</p>
					</div>

				</div>
				<div className="grid gap-4">

					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgSeven}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The user-friendly interface makes
							designing forms a breeze. Even our non-
							technical team members can create
							beautiful forms. Our respondents love the
							personalized experience, and we see
							higher completion rates.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgEight}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>Deploying forms globally has expanded
							our reach. The multi-language support
							and region-specific settings are fantastic.</span>
						</p>
					</div>
					<div className="border rounded-lg bg-white/20 backdrop-blur-lg p-6">
						<div className="flex space-x-3 mb-4">
							<img
								src={testimonialsImgNine}
								className="w-12 h-12 rounded-full"
								alt="User Image"
							/>
							<p>User</p>
						</div>
						<p className="text-sm space-y-4">
							<span>The comprehensive training sessions
							empowered our team to fully utilize all
							features. We're seeing great results in our
							data lection.</span>
						</p>
					</div>

				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;