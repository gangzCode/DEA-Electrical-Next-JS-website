import simg from "/public/images/service/panelUpgrades.png";
import simg2 from "/public/images/service/aluminumWiringRemediation.png";
import simg3 from "/public/images/service/knob&TubeWiringReplacement.png";
import simg4 from "/public/images/service/EVCharging.png";
import simg5 from "/public/images/service/smartHome.png";
import simg6 from "/public/images/service/newHomeConstruction.png";
import simg7 from "/public/images/service/home-Renovation.png";
import simg8 from "/public/images/service/interior&ExteriorLighting.png";
import simg9 from "/public/images/service/pool&HotTub.png";
import simg10 from "/public/images/service/commercialConstruction.png";
import simg11 from "/public/images/service/upgradesandRenovations.png";
import simg12 from "/public/images/service/emergencyRepair.png";
import simg13 from "/public/images/service/lightingRetrofits.png";
import simg14 from "/public/images/service/preventativeMaintenance.png";
import simg15 from "/public/images/service/sportFieldLightingCleaning.png";
import simg16 from "/public/images/service/industrialConstruction.png";
import simg17 from "/public/images/service/facility&EquipmentUpgrades.png";
import simg18 from "/public/images/service/on-SiteSupport.png";
import simg19 from "/public/images/service/energyEfficiency.png";

import sIcon1 from "/public/images/icon/solar-roof.svg";
import sIcon2 from "/public/images/icon/wires.svg";
import sIcon3 from "/public/images/icon/connector-lines-and-circle.svg";
import sIcon4 from "/public/images/icon/electric-car.svg";
import sIcon5 from "/public/images/icon/smart-home.svg";
import sIcon6 from "/public/images/icon/new-home.svg";

import sIcon7 from "/public/images/icon/2.svg";

import sIcon8 from "/public/images/icon/light-bulb.svg";
import sIcon9 from "/public/images/icon/pool.svg";
import sIcon10 from "/public/images/icon/construction-worker.svg";
import sIcon11 from "/public/images/icon/system-upgrade.svg";

import sIcon12 from "/public/images/icon/repair-wrenches.svg";
import sIcon13 from "/public/images/icon/lighting-lamp-shade.svg";
import sIcon14 from "/public/images/icon/host-maintenance.svg";
import sIcon15 from "/public/images/icon/stadium-walls.svg";
import sIcon16 from "/public/images/icon/construction-transport.svg";
import sIcon17 from "/public/images/icon/equipment-kid-3-svgrepo-com.svg";
import sIcon18 from "/public/images/icon/electrical-worker.svg";
import sIcon19 from "/public/images/icon/electric-car.svg";
import sIcon20 from "/public/images/icon/efficiency.svg";

import sSingleimg1 from "/public/images/service-single/2.jpg";
import sSingleimg2 from "/public/images/service-single/3.jpg";

const Services = [
	// Residential services
	{
		Id: "1",
		sImg: simg,
		sIcon: sIcon1,
		sTitle: "Panel Upgrades",
		slug: "Panel-Upgrades",
		description:
			"Upgrading your panel involves the replacement of an older fuse panel with a new circuit breaker panel, offering increased convenience and improved safety for your electrical system.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "2",
		sImg: simg2,
		sIcon: sIcon2,
		sTitle: "Aluminum Wiring Remediation",
		slug: "Aluminum-Wiring-Remediation",
		description:
			"Aluminum wiring, while installed correctly, differs from copper, needing more maintenance and risking overheating. Though rewiring with copper is best, repairs are possible. Contact DEA for guidance.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "3",
		sImg: simg3,
		sIcon: sIcon3,
		sTitle: "Knob & Tube Wiring Replacement",
		slug: "Knob-&-Tube-Wiring-Replacement",
		description:
			"Knob and tube wiring no longer meets safety standards. Most insurers won't cover homes with it, necessitating full rewiring with copper. Benefits include increased capacity, safety, and reduced circuit overload.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "4",
		sImg: simg4,
		sIcon: sIcon4,
		sTitle: "EV Charging",
		slug: "EV-Charging",
		description:
			"Got an electric vehicle? We install all EV charging stations, including Tesla, Flo, and ChargePoint. Unsure if your panel can handle it? Let our Licensed Electricians assess. The right charger ensures quick, efficient charging.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "5",
		sImg: simg5,
		sIcon: sIcon5,
		sTitle: "Smart Home",
		slug: "Smart-Home",
		description:
			"Meet DEA Smart Home! Enjoy hassle-free smart technology installation and maintenance with our packages, starting at $39.99/month. Our licensed electricians handle smart lighting controls, ensuring convenience and ease.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "6",
		sImg: simg6,
		sIcon: sIcon6,
		sTitle: "New Home Construction",
		slug: "New-Home-Construction",
		description:
			"We're partners with builders for great experiences. Customer satisfaction is key to us. Expect top-quality work from our electricians. As an ACP member with ESA, we excel in meeting Ontario Electrical Safety Code standards.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "7",
		sImg: simg7,
		sIcon: sIcon7,
		sTitle: "Home-Renovation",
		slug: "Home-Renovation",
		description:
			"Renovating and concerned about contractors? At DEA, customer satisfaction is paramount. We're committed to exceeding your expectations. Contact DEA Home Electric today for your trusted renovation partner.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "8",
		sImg: simg8,
		sIcon: sIcon8,
		sTitle: "Interior & Exterior Lighting",
		slug: "Interior-&-Exterior-Lighting",
		description:
			"Elevate your home with lighting solutions. Extend outdoor usability, brighten kitchens, or set the perfect mood with dimmers. Our licensed electricians offer tailored solutions to meet your needs. Get in touch with us today for expert guidance.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "9",
		sImg: simg9,
		sIcon: sIcon9,
		sTitle: "Pool & Hot Tub",
		slug: "Pool-&-Hot-Tub",
		description:
			"A pool or hot tub can add hours of enjoyment to your home life. However, it is important to make sure your electrical panel is able to handle additional load. Not sure? Contact us today for a free consultation with one of our licensed residential electricians.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},

	// Commercial services
	{
		Id: "10",
		sImg: simg10,
		sIcon: sIcon10,
		sTitle: "Commercial Construction",
		slug: "Commercial-Construction",
		description:
			"We offer design-build, pre-planning, and pre-fabrication services to construction clients, ensuring on-time project completion. Explore our featured projects across various commercial sectors.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "11",
		sImg: simg11,
		sIcon: sIcon11,
		sTitle: "Upgrades and Renovations",
		slug: "Upgrades-and-Renovations",
		description:
			"Time for a building renovation? DEA Electric's team handles lighting upgrades, power enhancements, and new wiring installations. Our expertise spans commercial applications: food, hospitality, retail, and more. Dream it, and we'll help build it.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "12",
		sImg: simg12,
		sIcon: sIcon12,
		sTitle: "Emergency Repair",
		slug: "Emergency-Repair",
		description:
			"An electrical emergency can bring your operation to a screeching halt. Our licensed electricians are available and ready to help no matter the time of day, or the weather. We will get you back up and running in no time by restoring power, and making repairs and replacements as necessary.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "13",
		sImg: simg12,
		sIcon: sIcon4,
		sTitle: "EV Chargers",
		slug: "EV-Chargers",
		description:
			"Got an electric vehicle? We install all EV charging stations, including Tesla, Flo, and ChargePoint. Unsure if your panel can handle it? Let our Licensed Electricians assess. The right charger ensures quick, efficient charging.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "14",
		sImg: simg13,
		sIcon: sIcon13,
		sTitle: "Lighting Retrofits",
		slug: "Lighting-Retrofits",
		description:
			"Upgrading your facility's lighting not only saves on hydro but also enhances customer experience and boosts employee productivity. Government grants can offset initial investment costs. Contact us for details.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "15",
		sImg: simg14,
		sIcon: sIcon14,
		sTitle: "Preventative Maintenance",
		slug: "Preventative-Maintenance",
		description:
			"Routine repairs and preventative maintenance save thousands by avoiding unexpected failures and downtime. Our program at DEA Electric includes infrared scans, visual inspections, and more. Reach your goals confidently with reliable electrical systems.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "16",
		sImg: simg15,
		sIcon: sIcon15,
		sTitle: "Sport Field Lighting",
		slug: "Sport-Field-Lighting",
		description:
			"We install and service metal halide and LED lighting for sports fields, municipal infrastructure, and private facilities, ensuring safety and visibility. Contact us for effective, energy-efficient solutions at competitive rates: 1-844-667-6937.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},

	// Industrial services
	/* {
		Id: "17",
		sImg: simg16,
		sIcon: sIcon16,
		sTitle: "Industrial Construction",
		slug: "Industrial-Construction",
		description:
			"Design-build, pre-planning, and pre-fabrication are all services we offer our construction customers. Staying on schedule means more money for your bottom line, and with these services, our work is always on time.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	}, */
	{
		Id: "18",
		sImg: simg17,
		sIcon: sIcon17,
		sTitle: "Facility & Equipment Upgrades",
		slug: "Facility-&-Equipment-Upgrades",
		description:
			"Making improvements to your business operation is important to your continued success. Partner with DEA for facility and equipment upgrades to ensure a smooth transition.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "19",
		sImg: simg14,
		sIcon: sIcon14,
		sTitle: "Preventative Maintenance",
		slug: "Preventative-Maintenance",
		description:
			"Routine repairs and preventative maintenance save thousands by avoiding unexpected failures and downtime. Our program at DEA Electric includes infrared scans, visual inspections, and more. Reach your goals confidently with reliable electrical systems.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "20",
		sImg: simg12,
		sIcon: sIcon12,
		sTitle: "Emergency Repair",
		slug: "Emergency-Repair",
		description:
			"An electrical emergency can bring your operation to a screeching halt. Our licensed electricians are available and ready to help no matter the time of day, or the weather. We will get you back up and running in no time by restoring power, and making repairs and replacements as necessary.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "21",
		sImg: simg18,
		sIcon: sIcon18,
		sTitle: "On-Site Support",
		slug: "On-Site-Support",
		description:
			"Shift coverage, supplemental staffing, support, all when you need it most. DEA Electric's service electricians are here for you during peak times, seasonal scheduling, and emergencies.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "22",
		sImg: simg4,
		sIcon: sIcon4,
		sTitle: "EV Chargers",
		slug: "EV-Chargers",
		description:
			"Got an electric vehicle? We install all EV charging stations, including Tesla, Flo, and ChargePoint. Unsure if your panel can handle it? Let our Licensed Electricians assess. The right charger ensures quick, efficient charging.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "23",
		sImg: simg19,
		sIcon: sIcon20,
		sTitle: "Energy Efficiency",
		slug: "Energy-Efficiency",
		description:
			"Save on electricity costs with power factor correction, lighting retrofits, and power monitoring. Our licensed electricians at DEA can enhance your operation's efficiency and savings. A poor power factor (below 90%) leads to power quality issues and surcharges on your monthly bill.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "24",
		sImg: simg13,
		sIcon: sIcon13,
		sTitle: "Lighting Retrofits",
		slug: "Lighting-Retrofits",
		description:
			"Upgrading your facility's lighting not only saves on hydro but also enhances customer experience and boosts employee productivity. Government grants can offset initial investment costs. Contact us for details.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},

	// Institutional services
	{
		Id: "25",
		sImg: simg14,
		sIcon: sIcon14,
		sTitle: "Preventative Maintenance",
		slug: "Preventative-Maintenance",
		description:
			"Routine repairs and preventative maintenance save thousands by avoiding unexpected failures and downtime. Our program at DEA Electric includes infrared scans, visual inspections, and more. Reach your goals confidently with reliable electrical systems.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "26",
		sImg: simg12,
		sIcon: sIcon12,
		sTitle: "Emergency Repair",
		slug: "Emergency-Repair",
		description:
			"An electrical emergency can bring your operation to a screeching halt. Our licensed electricians are available and ready to help no matter the time of day, or the weather. We will get you back up and running in no time by restoring power, and making repairs and replacements as necessary.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "27",
		sImg: simg18,
		sIcon: sIcon18,
		sTitle: "On-Site Support",
		slug: "On-Site-Support",
		description:
			"Shift coverage, supplemental staffing, support, all when you need it most. DEA Electric's service electricians are here for you during peak times, seasonal scheduling, and emergencies.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "28",
		sImg: simg4,
		sIcon: sIcon4,
		sTitle: "EV Chargers",
		slug: "EV-Chargers",
		description:
			"Got an electric vehicle? We install all EV charging stations, including Tesla, Flo, and ChargePoint. Unsure if your panel can handle it? Let our Licensed Electricians assess. The right charger ensures quick, efficient charging.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "29",
		sImg: simg19,
		sIcon: sIcon20,
		sTitle: "Energy Efficiency",
		slug: "Energy-Efficiency",
		description:
			"Save on electricity costs with power factor correction, lighting retrofits, and power monitoring. Our licensed electricians at DEA can enhance your operation's efficiency and savings. A poor power factor (below 90%) leads to power quality issues and surcharges on your monthly bill.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "30",
		sImg: simg17,
		sIcon: sIcon17,
		sTitle: "Facility & Equipment Upgrades",
		slug: "Facility-&-Equipment-Upgrades",
		description:
			"Making improvements to your business operation is important to your continued success. Partner with DEA for facility and equipment upgrades to ensure a smooth transition.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "31",
		sImg: simg10,
		sIcon: sIcon10,
		sTitle: "Commercial Construction",
		slug: "Commercial-Construction",
		description:
			"We offer design-build, pre-planning, and pre-fabrication services to construction clients, ensuring on-time project completion. Explore our featured projects across various commercial sectors.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
	{
		Id: "32",
		sImg: simg13,
		sIcon: sIcon13,
		sTitle: "Lighting Retrofits",
		slug: "Lighting-Retrofits",
		description:
			"Upgrading your facility's lighting not only saves on hydro but also enhances customer experience and boosts employee productivity. Government grants can offset initial investment costs. Contact us for details.",
		ssImg1: sSingleimg1,
		ssImg2: sSingleimg2,
	},
];

export default Services;

/*
A panel upgrade involves replacing your old fuse panel with a new, more convenient circuit breaker panel.

"Properly installed and maintained aluminum wiring isn't necessarily a cause for concern, but there are some big differences between aluminum and copper wiring. Aluminum wiring requires more maintenance and is more prone to overheating and failure. The absolute best option is to re-wire your home with copper, but you can choose to have repairs or maintenance done instead. Get in touch with us at DEA, and we can help you determine the best solution for your home."

"Unfortunately, knob & tube wiring doesn't meet safety standards anymore. Most insurance companies won't provide coverage for homes with knob and tube wiring, meaning these will need to be fully re-wired with copper. Benefits of upgrading from knob & tube are undeniable, and include more electrical capacity, added safety, and less overloading of circuits."

"Introducing DEA Smart Home! With a smart home package from DEA, you can experience the convenience of smart home technology without the hassle of setting it up or maintaining it. While other providers can offer some smart devices, only a licensed electrician can install smart lighting controls. We have plans starting from $39.99 per month."

"We partner with like-minded homebuilders and general contractors to give customers an exceptional home-building experience. Our customers mean everything to us, and we work hard to ensure that, above all else, they are pleased with our work. Our dedication to the trade means you can expect our work to be top-notch, and our residential electricians are friendly and knowledgeable. We are also part of the Authorized Contractor Program (ACP) with the ESA (Electrical Safety Authority), thanks to our demonstrated knowledge of the Ontario Electrical Safety Code."

"Excited for your renovation, but dreading working with the contractor? At DEA, we value our customers above all else. We're happy to answer any question, and we work hard to make sure you are completely satisfied with the outcome of your project. We love seeing your vision come together. If you're looking for a great contractor to partner with on your next home renovation project, contact DEA Home Electric today."

"Lighting is one of the highest impact improvements you can make to your home. Adding lighting to an outdoor space extends its use into the evening; undercabinet lighting in your kitchen can make meal prep much more enjoyable, and adding a dimmer switch can set the right atmosphere for a dinner party with friends. Whatever your lighting needs are, our licensed electricians can work with you to determine the right solution. Contact us today."

"A pool or hot tub can add hours of enjoyment to your home life. However, it is important to make sure your electrical panel is able to handle additional load. Not sure? Contact us today for a free consultation with one of our licensed residential electricians."

"Design-build, pre-planning, and pre-fabrication are all services we offer our construction customers. Staying on schedule means more money for your bottom line, and with these services, our work is always on time. We have experience in all commercial applications, including food and beverage, hospitality, retail, office, long-term care, and multi-residential. Have a look through our featured projects to see some of what we have done."

"Is it time to renovate your building? Whether you need a lighting upgrade, more power, or new wiring installed, DEA Electric's team of electricians will get the job done. We have experience in the following commercial applications: food and beverage, hospitality, multi-residential, retail, and more. If you can dream it, we can help you build it."

"An electrical emergency can bring your operation to a screeching halt. Our licensed electricians are available and ready to help no matter the time of day or the weather. We will get you back up and running in no time by restoring power and making repairs and replacements as necessary."

"Canada's EV sales continue to grow, and with that, EC charging infrastructure is also expected to grow. DEA Electric has plenty of experience and expertise when it comes to installing EV chargers. In fact, we are Niagara's only Tesla-recommended installer. We install all makes of EV chargers, including ChargePoint, Flo, and Tesla. Prepare for the EV revolution today and be ready to meet both your employees' and customers' charging needs."

"A major benefit of upgrading your facility's lighting is definitely to save on hydro. However, improved lighting also improves the atmosphere for your customers and can make your employees more productive. There are government grants available to help with the initial investment cost of this lighting. Contact us to find out more."



"Planning for routine repairs, identifying potential problems, and planning for replacement can save thousands. A good preventative maintenance program will help avoid unanticipated failures and downtime of the operation. Realize your goals, and set them higher when you don't need to worry about unreliable electrical systems. A typical preventative maintenance program with DEA Electric includes infrared scans, visual inspections, cleaning, and exercising of disconnects."

"Sports field lighting is essential to any outdoor sports venue, providing visibility and safety for players and spectators alike. We install and service metal halide and LED lighting for sports fields, municipal infrastructure and private facilities. With energy-efficient options and the latest technology, we can help you find effective lighting solutions at competitive rates. For a free quote, call us at 1-844-667-6937 or check out the contact form."

"Making improvements to your business operation is important to your continued success. Partner with DEA for facility and equipment upgrades to ensure a smooth transition."

"Shift coverage, supplemental staffing, and support when you need it most. DEA Electric's service electricians are here for you during peak times, seasonal scheduling, and emergencies."

"Power factor correction, lighting retrofits, and power monitoring are all ways your organization can save money on electricity costs. DEA's team of licensed and experienced electricians can help you discover ways to save money and add efficiency to your operation. Your operation's power factor determines how effectively you are using the power supplied by your energy provider. If your power factor is poor (below 90%), it causes power quality issues for the whole power infrastructure. To counteract that impact, a surcharge is added to your bill each month."
*/
