import React from 'react';
import './paymentsidepanel.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import CancelIcon from '@mui/icons-material/Cancel';
import formatDate from '../../utils/date-format';

const PaymentSidepanel = (props) => {
    const { parentCallback, data, count, todaydays } = props;
    console.log(data);
    return (
        <div className="salary-sidepanel-container">
            <div className="salary-sidepanel-box1">
                <span className="close-sidebar" role="button" onKeyDown={parentCallback} tabIndex={-27} onClick={parentCallback}>
                    <CancelIcon style={{ cursor: 'pointer' }} />
                </span>
                <div className="salary-sidepanel-box-img">
                    <img
                        className="salary-sidepanel-img"
                        alt="user"
                        src="https://ik.imagekit.io/6vy1oi4m4uh/profile-pic_DBEIl1ZKUGo.png?updatedAt=1637958057447"
                    />
                </div>
                <div className="salary-sidepanel-box-head">
                    <h3 style={{ fontWeight: 700, color: '#000000', fontSize: '24px', marginLeft: '-25px' }}>
                        {data?.personalDetails?.fullName}
                    </h3>
                    <div className="sidepanel-icon" style={{ marginBottom: '20px' }}>
                        <span>
                            <BusinessCenterIcon />
                            <span>{data?.companyDetails?.designation}</span>
                        </span>
                        <span>
                            <PhoneIcon />
                            <span>{data?.personalDetails?.mobileNo}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="salary-sidepanel-box2">
                <div>
                    <p>UAN No</p>
                    <b>{data?.companyDetails?.UAN}</b>
                </div>
                <div>
                    <span style={{ marginLeft: '13px' }}>
                        <p>Paid Days</p>
                        <b>{count.count ? count.count : 0}</b>
                    </span>
                    <span>
                        <p>OT</p>
                        <b>{count.ot ? count.ot : 0}</b>
                    </span>
                </div>
                <div>
                    <p>Joining Date</p>
                    <b>
                        <b>{formatDate(data?.companyDetails?.joiningDate)}</b>
                    </b>
                </div>
            </div>
            <div className="salary-sidepanel-box3">
                <div className="salary-sidepanel-box-head3">Total Earning</div>
                <div className="salary-sidepanel-box-cont">
                    <div>
                        <p>Basic Salary</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.basicSalary * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.basicSalary) * count.count}
                        </b>
                    </div>
                    <div>
                        <p>HRA</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.hra * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.hra) * count.count}
                        </b>
                    </div>
                    <div>
                        <p>Con</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.con * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.con) * count.count}
                        </b>
                    </div>
                    <div>
                        <p>Medical</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.medical * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.medical) * count.count}
                        </b>
                    </div>
                    <div>
                        <p>Education</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.education * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.education) * count.count}
                        </b>
                    </div>
                    <div>
                        <p>Canteen</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((data?.salaryDetails?.canteen * count.count) / todaydays)
                                : Math.round(data?.salaryDetails?.canteen) * count.count}
                        </b>
                    </div>
                </div>
            </div>
            <div className="salary-sidepanel-box3">
                <div className="salary-sidepanel-box-head3">Total Deduction</div>
                <div className="salary-sidepanel-box-cont">
                    <div>
                        <p>Provident Fund (PF)</p>
                        <b>
                            {data?.companyDetails?.selectWages === 'Monthly Wages'
                                ? Math.round((((data?.salaryDetails?.basicSalary * count.count) / todaydays) * 12) / 100)
                                : Math.round((data?.salaryDetails?.basicSalary * count.count * 12) / 100)}
                        </b>
                    </div>
                    <div>
                        <p>Canteen</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Advance Payment</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Loan</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Tax</p>
                        <b>{Math.round(data?.salaryDetails?.incomeTax)}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentSidepanel;
