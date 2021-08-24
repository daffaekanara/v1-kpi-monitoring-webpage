import React, {useState} from 'react';
import Button from '../../../Button';

const UploadIsle = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const [isSelected, setIsSelected] = useState(false)

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

	const handleSubmission = (e) => {

		e.preventDefault()
		const formData = new FormData();

		formData.append('mrpt', selectedFile);

		fetch(
			'http://156.67.217.92/api/admin/budget_data/mrpt_file',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};


	return(
   <div>
       <form>
			<input type="file" name="file" onChange={changeHandler} />
			{isSelected ? (
				<h></h>
			) : (
				<p></p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
        </form>
		</div>
	)
}

export default UploadIsle