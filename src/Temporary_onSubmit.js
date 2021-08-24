<form className='add-form' onSubmit={onSubmitNIK}>
            <div className='form-control'>
                <label>NIK</label>
                <input type='number' placeholder='NIK' 
                value={NIK} onChange={(e) => setNIK(e.target.value)}
                />
            </div> 

            <input type='submit' value='Save' 
            className='btn btn-block' style={{backgroundColor: "#5F887D"}} />
        </form>