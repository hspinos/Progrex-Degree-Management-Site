import React from "react";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { VscCircuitBoard } from "react-icons/vsc";
import { SiDocusign } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

/* This example requires Tailwind CSS v2.0+ */
const features = [
	{
		name: "Documents",
		description:
			"Send and sign important documents using Docusign. Docusign allows users to adopt a virtual signature to and securely sign documetns.",
	},
	{
		name: "Gameboard",
		description:
			"A gamiefied representation of a user's progress. Students can the relative progression of their peers along with their chosen displayed badges.",
	},
	{
		name: "Badges",
		description:
			"A new system of rewarding students for their numerous achievements. By accomplishing the necessary tasks, students can earn badges and display them on their profiles to be seen by their peers.",
	},
	{
		name: "Progress Tracking",
		description:
			"Course management for both students and advisors that allows viewing and modification of course data.",
	},
];

export default function AboutPage() {
	return (
		<div className="bg-grey">
			<div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
				<div>
					<h2 className="text-3xl font-extrabold tracking-tight text-white-900 sm:text-4xl">
						Welcome to ProgREX
					</h2>
					<p className="mt-4 text-white-500">
						A new approach to degree management for students and advisors in the
						computer science graduate program.
					</p>

					<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
						{features.map((feature) => (
							<div key={feature.name} className="border-t border-grey-200 pt-4">
								<dt className="font-medium text-white-900">{feature.name}</dt>
								<dd className="mt-2 text-sm text-white-500">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="grid grid-cols-2 grid-rows-2">
					<SiDocusign class="h-40 w-40" />
					<VscCircuitBoard class="h-40 w-40 bg-[#2BB673] rounded-xl" />
					<HiOutlineBadgeCheck class="h-40 w-40 bg-[#2BB673] rounded-xl" />
					<FaGraduationCap class="h-40 w-40 " />
				</div>
			</div>
		</div>
	);
}
