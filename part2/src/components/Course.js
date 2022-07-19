import CoursePart from './CoursePart'

const Course = ({course}) => {
	console.log("Course>>",course)
	return (
		<div>
			<h2>{course.name}</h2>
			<ul>
				{course.parts.map(part => 
					// console.log(part)
					<CoursePart key={part.id} part={part}/>
				)}
			</ul>
		</div>
	)
}

export default Course