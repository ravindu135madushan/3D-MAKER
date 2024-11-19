import React from 'react'
import "./Add.scss"

const Add = () => {
    return (
        <div className="add">
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="E.g I Will do somthing i'm really good at" name="" id="" />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="3DDesign">3D Design</option>
                            <option value="3DPrinting">3D Printing</option>
                         
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Image</label>
                        <input type="text" multiple />
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="16" placeholder='Brief description to introduce your service to customers'></textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" placeholder='E.g One-Design' />
                        <label htmlFor="">Short Description</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Short Description of your service'></textarea>
                        <label htmlFor="">Delivery Time (E.g 3 days)</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Revision Number</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder='E.g Design size' />
                        <input type="text" placeholder='E.g Design size' />
                        <input type="text" placeholder='E.g Design size' />
                        <label htmlFor="">Price</label>
                        <input type="number" min={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add