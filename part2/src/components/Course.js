import CoursePart from './CoursePart'

const Course = ({course}) => {
	// console.log(course.parts)
	return (
		<div>
			<h2>{course.name}</h2>
			<ul>
				{course.parts.map(part => 
					// console.log(part)
					<CoursePart key={part.id} part={part}/>
				)}
			</ul>
			<h3>Total of {getTotalExercises(course.parts)} exercises</h3>
		</div>
	)

	function getTotalExercises(parts) {
		parts.map(e => console.log(e.exercises))
		
		return parts.reduce( (total, next) => total + +next.exercises, 0 ) 
	}
}

export default Course