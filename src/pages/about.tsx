import '../styles/aboutSarah.css';
import sarahPlant from '../images/SarahPlantWhisperer.png';
import sarahGidget from '../images/sarahAndGidget.png';
import dolphin from '../images/sarahphoenix2.jpg';
import sarahDanger from '../images/SarahInVeryRealDanger.png';
import withAndrew from '../images/withAndrew.png';
import iaabc from '../images/iaabc.png';


export default function About() {
	return (
		<>
			<div className="aboutPage appearOnScroll">
				<div className="headingArea">
					<h1>Hi, I'm Sarah Kalnajs</h1>
					<div className="bioWords">
						<span>Dog nerd</span>
						<span>Rescue voluneer</span>
						<span>Educator</span>
						<span>Ethologist</span>
						<span>UW graduate</span>
					</div>
					<div className="border"></div>
				</div>

				<div className="photoWithMat">
					<div className="mat darkMat"></div>
					<div className="mat lightMat"></div>
					<img src={sarahPlant} />
				</div>
				<div className="aboutSection">
					<div className="aboutContent">
						<p>
							I've been training dogs for like a million years and I've helped thousands of people solve thousands of problems so they can live the best lives possible with their four-legged companions.
						</p>
						<p>
							I have a background in ethology, and a passion for rescue. This blurb can be a little longer than that too talking about general experience, philosophy, relatable life stuff etc.
						</p>
						<p>
							I live with my 5 dogs, 2 cats, and 1 husband.
						</p>
						<div className="iconsContainer">
							<a href="https://www.instagram.com/sarahkalnajs"><i className="fa fa-instagram"></i></a>
							<a href="https://www.instagram.com/sarahkalnajs"><i className="fa fa-instagram"></i></a>
							<a href="https://www.instagram.com/sarahkalnajs"><i className="fa fa-instagram"></i></a>
							<a href="https://www.instagram.com/sarahkalnajs"><i className="fa fa-instagram"></i></a>
						</div>
					</div>
					<div className="border"></div>
					<div className="photosRow">
						<div className="photo"><img src={sarahGidget} /></div>
						<div className="photo"><img src={dolphin} /></div>
						<div className="photo"><img src={withAndrew} /></div>
						<div className="photo"><img src={sarahDanger} /></div>
					</div>
					<div className="border"></div>
				</div>
				<div className="qualifications">
					<div className="card">
						<h2>Qualifications</h2>
						<div className="description">Click to learn more about each item</div>

						<p><a href="#">Certified Dog Behavior Consultant (CDBC)</a></p>
						<p><a href="#">Certified Professional Dog Trainer (CPDT)</a></p>

						<p>Professional member of the:</p>
						<ul>
							<li>
								<a href="#">ABMA (Animal Behavior Management Alliance)</a>
							</li>
							<li>
								<a href="#">ABMA (Animal Behavior Management Alliance)</a>
							</li>
							<li>
								<a href="#">ABMA (Animal Behavior Management Alliance)</a>
							</li>
							<li>
								<a href="#">ABMA (Animal Behavior Management Alliance)</a>
							</li>
						</ul>
						<p>Editor of the peer-reviewed <a href="#">Journal of Applied Companion Animal Behavior</a></p>

						<p>Member of the advisory board and faculty of the <a href="#">Companion Animal Sciences Institute</a></p>

						<p>Instructor of courses on dog related topics for <a href="#">Raising Canine</a>.</p>

						<div className="qualificationIcons">
							<div className="circleCard">
								<img src={iaabc} />
							</div>
							<div className="circleCard">
								<img src={iaabc} />
							</div>
							<div className="circleCard">
								<img src={iaabc} />
							</div>
							<div className="circleCard">
								<img src={iaabc} />
							</div>
						</div>
					</div>
				</div>
				<div className="experience">
					<div className="experienceSection">
						<h2>In the rescue world</h2>
						<p>Sarah is a Certified Dog Behavior Consultant (International Association of Animal Behavior Consultants) and Certified Pet Dog Trainer (Certification Council for Pet Dog Trainers) with over ten years' experience working in canine behavior, training, and research.
							Sarah is a professional member of the ABMA (Animal Behavior Management Alliance), APDT (Association of Pet Dog Trainers), IAABC (International Association of Animal Behavior Consultants), and the IIACAB (International Institute for Applied Companion Animal Behavior).
						</p>

						<div className="photosRow">
							<div className="photo"><img src={sarahGidget} /></div>
							<div className="photo"><img src={sarahGidget} /></div>
						</div>
					</div>

					<div className="experienceSection">
						<h2>Training trainers</h2>
						<p>Sarah was once president of Wisconsin American Eskimo Rescue and political liaison for the Wisconsin Dog Rescue Coalition as well as an Executive Committee Member of AAFMED (Arf's Angel Fund Medical Assistance) which provides financial aid to rescued pets in need of medical help.
							A popular speaker and freelance writer, Sarah presents seminars nationwide on topics relating to dog training and behavior. She has been interviewed by BBC radio, NBC television, Wisconsin Public Radio, Women’s Health & Fitness magazine, and Honolulu magazine, and has written articles for APDT Chronicle of the Dog, Madison magazine, Allpets, and other publications.
							Sarah serves as a consultant to a number of humane societies in Southern Wisconsin, training staff and implementing evaluation protocols and training and behavior programs. She is well known for her evaluation protocol (the Blue Dog Behavior Evaluation) as well as the Dog-Safe Waist Restraint System used by shelters and dog owners who need to evaluate or work with reactive, fearful or aggressive dogs.
						</p>
					</div>

					<div className="experienceSection">
						<h2>Educating the world</h2>
						<p>Sarah was once president of Wisconsin American Eskimo Rescue and political liaison for the Wisconsin Dog Rescue Coalition as well as an Executive Committee Member of AAFMED (Arf's Angel Fund Medical Assistance) which provides financial aid to rescued pets in need of medical help.
							A popular speaker and freelance writer, Sarah presents seminars nationwide on topics relating to dog training and behavior. She has been interviewed by BBC radio, NBC television, Wisconsin Public Radio, Women’s Health & Fitness magazine, and Honolulu magazine, and has written articles for APDT Chronicle of the Dog, Madison magazine, Allpets, and other publications.
							She has extensive experience as an expert witness in both civil and criminal litigation relating to dog aggression.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}