import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Navbar(props) {
  const navigate = useNavigate()

    const options1 = [
        { label: "United Arab Emirates", value: "ae" },
        { label: "Argentina", value: "ar" },
        { label: "Austria", value: "at" },
        { label: "Australia", value: "au" },
        { label: "Belgium", value: "be" },
        { label: "Bulgaria", value: "bg" },
        { label: "Brazil", value: "br" },
        { label: "Canada", value: "ca" },
        { label: "Switzerland", value: "ch" },
        { label: "China", value: "cn" },
        { label: "Colombia", value: "co" },
        { label: "Cuba", value: "cu" },
        { label: "Czech Republic", value: "cz" },
        { label: "Germany", value: "de" },
        { label: "Egypt", value: "eg" },
        { label: "France", value: "fr" },
        { label: "United Kingdom", value: "gb" },
        { label: "Greece", value: "gr" },
        { label: "Hong Kong", value: "hk" },
        { label: "Hungary", value: "hu" },
        { label: "Indonesia", value: "id" },
        { label: "Ireland", value: "ie" },
        { label: "Israel", value: "il" },
        { label: "India", value: "in" },
        { label: "Italy", value: "it" },
        { label: "Japan", value: "jp" },
        { label: "South Korea", value: "kr" },
        { label: "Lithuania", value: "lt" },
        { label: "Latvia", value: "lv" },
        { label: "Morocco", value: "ma" },
        { label: "Mexico", value: "mx" },
        { label: "Malaysia", value: "my" },
        { label: "Nigeria", value: "ng" },
        { label: "Netherlands", value: "nl" },
        { label: "Norway", value: "no" },
        { label: "New Zealand", value: "nz" },
        { label: "Philippines", value: "ph" },
        { label: "Poland", value: "pl" },
        { label: "Portugal", value: "pt" },
        { label: "Romania", value: "ro" },
        { label: "Serbia", value: "rs" },
        { label: "Russia", value: "ru" },
        { label: "Saudi Arabia", value: "sa" },
        { label: "Sweden", value: "se" },
        { label: "Singapore", value: "sg" },
        { label: "Slovenia", value: "si" },
        { label: "Slovakia", value: "sk" },
        { label: "Thailand", value: "th" },
        { label: "Turkey", value: "tr" },
        { label: "Taiwan", value: "tw" },
        { label: "Ukraine", value: "ua" },
        { label: "United States", value: "us" },
        { label: "Venezuela", value: "ve" },
        { label: "South Africa", value: "za" }
      ];
      const selectChange = (e)=>{
          props.setSelect({
            label:e.target.label,
            value:e.target.value
          })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">News-Mon</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/" onClick={props.resetSearch}>General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business" onClick={props.resetSearch}>Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment"  onClick={props.resetSearch}>Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health" onClick={props.resetSearch}>Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science" onClick={props.resetSearch}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports" onClick={props.resetSearch}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology" onClick={props.resetSearch}>Technology</Link></li>
                        </ul>
                    <form className="d-flex p-2">
                            <div className="nav-item ">
                                <select class="form-select" style={{width:"200px"}} aria-label="Default select example" onChange={selectChange} >
                                    <option selected value={""}>International</option>
                                    {options1.map((ele)=>{
                                        return (
                                    <option value={ele.value}>{ele.label}</option>
                                        )
                                    })}
                                </select>
                            </div>
                    </form>
                    {/* <form className="d-flex p-2">
                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" id='searchbar' />
                        <button className="btn btn-outline-success" onClick={props.searching} type='button'>Search</button>
                    </form> */}
                    <form className="d-flex p-2">
  <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" id='searchbar' />
  <button className="btn btn-success" onClick={props.searching} type='button'>Search</button>
</form>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Subscribe
</button>
                    </div>

                </div>


            </nav>
        </>
    )
}