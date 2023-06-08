import React from 'react'

const Home = () => {
    return (
        <div className='mt-5'>
            <div className='container'>
                <div className='add_btn mt-2' >
                    <button className='btn btn-primary' >+ Add data</button>
                </div>

                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Vikas Pandey</td>
                            <td>vikaspandey42@email.com</td>
                            <td>Webdeveloper</td>
                            <td>8756378577</td>
                            <td className=" d-flex justify-content-between">
                                <button className='btn btn-success'><i class="fas fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fas fa-pen"></i> </button>
                                <button className='btn btn-warning'><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>leonardo The Caprio</td>
                            <td>Caprio@email.com</td>
                            <td>Ui/Ux engineer</td>
                            <td>8299236926</td>
                            <td className=" d-flex justify-content-between">
                                <button className='btn btn-success'><i class="fas fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fas fa-pen"></i> </button>
                                <button className='btn btn-warning'><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Robert</td>
                            <td>robertPattision@email.com</td>
                            <td>ML engineer</td>
                            <td>82946228852</td>
                            <td className=" d-flex justify-content-between">
                                <button className='btn btn-success'><i class="fas fa-eye"></i></button>
                                <button className='btn btn-primary'><i class="fas fa-pen"></i> </button>
                                <button className='btn btn-warning'><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
            

        </div>
    )
}

export default Home