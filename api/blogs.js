// images
import blogImg1 from "/public/images/blog/blog-1.jpg";
import blogImg2 from "/public/images/blog/blog-2.jpg";
import blogImg3 from "/public/images/blog/blog-3.jpg";
import blogImg4 from "/public/images/blog/blog-4.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/img-4.jpg";
import blogSingleImg2 from "/public/images/blog/img-5.jpg";
import blogSingleImg3 from "/public/images/blog/img-6.jpg";
import blogSingleImg4 from "/public/images/blog/img-8.jpg";

const blogs = [
	{
		id: "1",
		title: "The Ultimate Guide to Green Energy",
		slug: "The-Ultimate-Guide-to-Green-Energy",
		screens: blogImg1,
		description:
			"Discover the benefits of green energy and how you can incorporate eco-friendly practices into your lifestyle. From solar power to energy-efficient appliances, learn how to reduce your carbon footprint and save money on utility bills.",
		author: "Jenefer Willy",
		authorTitle: "Environmental Advocate",
		authorImg: blogAvaterImg1,
		create_at: "14 AUG,22",
		blogSingleImg: blogSingleImg1,
		comment: "5,975",
		blClass: "format-standard-image",
	},
	{
		id: "2",
		title: "The Importance of Energy Conservation",
		slug: "The-Importance-of-Energy-Conservation",
		screens: blogImg2,
		description:
			"Explore the critical role of energy conservation in preserving natural resources and mitigating climate change. Learn practical tips and strategies for reducing energy consumption at home and in the workplace.",
		author: "Konal Biry",
		authorTitle: "Environmental Advocate",
		authorImg: blogAvaterImg2,
		create_at: "16 AUG,22",
		blogSingleImg: blogSingleImg2,
		comment: "7,275",
		blClass: "format-standard-image",
	},
	{
		id: "3",
		title: "The Future of Renewable Energy Technologies",
		slug: "The-Future-of-Renewable-Energy-Technologies",
		screens: blogImg3,
		description:
			"Learn about the latest advancements in renewable energy technologies and their potential to revolutionize the global energy landscape. From wind turbines to hydrogen fuel cells, discover innovative solutions for a sustainable future.",
		author: "Jenefer Willy",
		authorTitle: "Environmental Advocate",
		authorImg: blogAvaterImg3,
		create_at: "18 AUG,22",
		blogSingleImg: blogSingleImg3,
		comment: "6,725",
		blClass: "format-standard-image",
	},
	{
		id: "4",
		title: "Harnessing the Power of Solar Energy",
		slug: "Harnessing-the-Power-of-Solar-Energy",
		screens: blogImg4,
		description:
			"Unlock the potential of solar energy as a clean and renewable power source for homes and businesses. Explore the benefits of solar panels, net metering, and solar battery storage systems in reducing reliance on fossil fuels.",
		author: "Jenefer Willy",
		authorTitle: "Solar Energy Enthusiast",
		authorImg: blogAvaterImg3,
		create_at: "18 AUG,22",
		blogSingleImg: blogSingleImg4,
		comment: "6,725",
		blClass: "format-video",
	},
];

export default blogs;
