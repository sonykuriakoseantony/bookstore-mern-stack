import React, { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI'

function SellBook() {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    pages: "",
    imageURL: "",
    price: "",
    discountPrice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    uploadImg: []
  })

  const [preview, setPreview] = useState("");
  const [previewThumbnails, setPreviewThumbnails] = useState([]);

  const handleResetForm = () => {
    setBookDetails({
      title: "",
      author: "",
      pages: "",
      imageURL: "",
      price: "",
      discountPrice: "",
      abstract: "",
      publisher: "",
      language: "",
      isbn: "",
      category: "",
      uploadImg: []
    })
    setPreview("");
    setPreviewThumbnails([]);
  }


  const handleBookImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setBookDetails(prev => ({
      ...prev,
      uploadImg: [...prev.uploadImg, file]
    }));

    setPreview(url);

    setPreviewThumbnails(prev => [...prev, url]);

  }

  const handleUploadBookForm = async () => {
    // check all fields have values
    const { title, author, pages, imageURL, price, discountPrice, abstract, publisher, language, isbn, category, uploadImg } = bookDetails;
    if (!title || !author || !pages || !imageURL || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImg.length == 0) {
      toast.info("Please fill all the fields");
      return;
    }
    else {
      console.log("Book details uploaded successfully. Call API to save the data.");

      const token = sessionStorage.getItem("token");
      if (token) {
        //create request header
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }

        //create request body with formdata

        //serialize formdata using FormData class of Javascript
        const reqBody = new FormData();
        for (let key in bookDetails) {
          if (key != "uploadImg") {
            reqBody.append(key, bookDetails[key])
          }
          else {
            uploadImg.forEach(item => {
              reqBody.append("uploadImg", item)
            })
          }
        }

        //call api with reqheader and reqbody
        const result = await addBookAPI(reqBody, reqHeader);
        if (result.status == 200) {
          toast.success("Book details saved successfully");
        }
        else if (result.status == 409) {
          toast.warning(result.response.data);
        } else {
          toast.error("Something went wrong!")
          console.log(result);

        }
        //clear the form after api call response received
        handleResetForm();
      }
    }
  }


  return (
    <>
      <div>
        <div className='p-5 pt-10 md:p-10 my-20 mx-5 bg-gray-200'>
          <div className="text-center text-3xl font-medium">Upload Book Details</div>
          <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
              <div className="mb-3 ">
                <input value={bookDetails.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} placeholder="Book Title" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} placeholder="Author" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.pages} onChange={(e) => setBookDetails({ ...bookDetails, pages: e.target.value })} placeholder="No. of Pages" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.imageURL} onChange={(e) => setBookDetails({ ...bookDetails, imageURL: e.target.value })} placeholder="Image URL" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.price} onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} placeholder="Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.discountPrice} onChange={(e) => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} placeholder="Discount Price" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <textarea value={bookDetails.abstract} onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} placeholder="Abstract" name="" id="" rows="5" className="w-full p-2  rounded placeholder-gray-400 text-black bg-white"></textarea>
              </div>

            </div>
            <div className='px-3'>
              <div className="mb-3 ">
                <input value={bookDetails.publisher} onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} placeholder="Publisher" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.language} onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} placeholder="Language" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.isbn} onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} placeholder="ISBN" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 ">
                <input value={bookDetails.category} onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} placeholder="Category" className="w-full p-2 rounded placeholder-gray-400 text-black bg-white" type="text" />
              </div>
              <div className="mb-3 flex justify-center items-center mt-10">
                <label htmlFor="uploadProfile" className={`${previewThumbnails?.length > 0 ? "" : "cursor-pointer"}`}>
                  <input onChange={e => handleBookImageUpload(e)} id="uploadProfile" className="hidden" type="file" name="" disabled={previewThumbnails?.length} />
                  <img width="200px" height="200px" alt="upload" src={preview ? preview : "/upload-file.webp"} />

                </label>
              </div>
              {preview &&
                <div className='w-full mt-4 flex justify-center items-center'>
                  {previewThumbnails &&
                    previewThumbnails?.map((thumb, index) => (
                      <img key={index} src={thumb} alt="" width="70px" height="70px" className='mx-2' />
                    ))
                  }
                  {previewThumbnails.length < 3 &&
                    <label htmlFor="bookUpload">
                      <input onChange={e => handleBookImageUpload(e)} id='bookUpload' type="file" hidden />
                      <FaPlusSquare className='text-4xl transition duration-300 ease-in-out cursor-pointer rounded bg-blue-900 text-white ms-3 border hover:bg-white hover:text-blue-900 ' />
                    </label>
                  }
                </div>
              }


            </div>
          </div>
          <div className="p-3 w-full flex md:justify-end justify-center  mt-8">
            <button onClick={handleResetForm} className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-gray-600 text-white border hover:bg-white hover:text-gray-600 hover:border-gray-600" >Reset</button>
            <button onClick={handleUploadBookForm} className="transition duration-300 ease-in-out cursor-pointer py-2 px-3 rounded bg-blue-900 text-white ms-3 border hover:bg-white hover:text-blue-900 hover:border-blue-900">Save Details</button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} position="top-center" theme='colored' />
    </>
  )
}

export default SellBook