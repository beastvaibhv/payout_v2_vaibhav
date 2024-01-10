import React, { useState } from 'react';
import Search from "../utils/assets/icons/Searchsearch.svg";
import ArrowUpDown from "../utils/assets/icons/Vectorupdown.svg";
import Download from "../utils/assets/icons/downloaddownload.svg";

const LowerDashboard = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <div className='table-heading'> Transactions | This Month</div>
            <div className='lower-container'>
            <div className='table-search-container'>
                <div className=''>
                    <div className='search-container'>
                        <div>
                            <img src={Search} alt="search-icon" />
                        </div>
                        <div><input
                            type='text'
                            placeholder="Search by order ID..."
                            value={text}
                            onChange={(e) => { setText(e.target.value) }}
                        /></div>
                    </div>
                </div>
                <div className='sort-btns'>
                    <div className='sort'>
                        <span>Sort</span>
                        <span>
                            <img src={ArrowUpDown} alt="arrow-up-down" />
                        </span>
                    </div>
                    <div className='download'>
                        <span>
                            <img src={Download} alt="download-btn" />
                        </span>
                    </div>

                </div>


            </div>
            </div>


        </div>
    )
}

export default LowerDashboard;
