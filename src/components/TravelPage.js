import React, { useEffect, useState } from "react"
import MainLayout from "./Layout/MainLayout"
import styled from "styled-components"
import { firestore } from "../index"
import { Divider } from "antd"
import { Link } from "react-router-dom"

const Travel_Page = () => {

    const [location, setLocation] = useState()

    useEffect(() => {
        retriveData()
    }, [])

    const retriveData = () => {
        firestore.collection("location").onSnapshot((response) => {
            const result = response.docs.map(d => {
                const { id, name, subDistric, distric, province, postalCode } = d.data()
                return { id, name, subDistric, distric, province, postalCode }
            })
            setLocation(result)
        })
    }

    const renderTravel_Page = () => {
        console.log(location)
        if (location) {
            return (
                <MainLayout>
                    <StyledWrapper>
                        <div className="title">
                            <h1>สถานที่ท่องเที่ยว</h1>
                        </div>
                        <div className="main-content">
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="http://pattaniheritagecity.psu.ac.th/demo/wp-content/uploads/2019/01/DSC_2381.jpg"
                                        title="pattani central mosque"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="/pattani_central_mosque">
                                            <h2>มัสยิดกลางปัตตานี</h2>
                                        </Link>
                                    </div>
                                    <h3>ทัชมาฮาลแห่งดินแดนปลายด้ามขวานไทย</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[0].subDistric}</p>
                                        <p>อำเภอ : {location[0].distric}</p>
                                        <p>จังหวัด : {location[0].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[0].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://lh3.googleusercontent.com/proxy/3gPxiE_OAIBVQzQgEkyMu9sSH_qYGK1Xhi1rj34eCBUBm7ye9-cm5vDbLe2JlQKoevDzHjk7pNu_K2DP5OlZCSGcpWIOkyzwn6sFrSfwJQDANp_jJyGB4M6R"
                                        title="Sai Khao"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="/sai_khao">
                                            <h2>น้ำตกทรายขาว</h2>
                                        </Link>
                                    </div>
                                    <h3>ป่าต้นน้ำของ 3 จังหวัดชายแดนภาคใต้</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[5].subDistric}</p>
                                        <p>อำเภอ : {location[5].distric}</p>
                                        <p>จังหวัด : {location[5].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[5].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/OAT_6396.jpg"
                                        title="Krue Sae Mosque"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="/kruesae_mosque">
                                            <h2>มัสยิดกรือเซะ</h2>
                                        </Link>
                                    </div>
                                    <h3>มัสยิดปีตูกรือบัน</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[6].subDistric}</p>
                                        <p>อำเภอ : {location[6].distric}</p>
                                        <p>จังหวัด : {location[6].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[6].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://pattaniheritagecity.psu.ac.th/demo/wp-content/uploads/2018/12/47686187_1750317068407740_3509541335180771328_n.jpg"
                                        title="Lim Ko Niao Shrine"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="/lim_ko_niao">
                                            <h2>ศาลเจ้าแม่ลิ้มกอเหนี่ยว</h2>
                                        </Link>
                                    </div>
                                    <h3>ศาลเจ้าเก่าแก่คู่บ้านคู่เมืองของปัตตานี</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[7].subDistric}</p>
                                        <p>อำเภอ : {location[7].distric}</p>
                                        <p>จังหวัด : {location[7].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[7].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://thailandtopvote.com/wp-content/uploads/2017/01/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%95%E0%B8%B0%E0%B9%82%E0%B8%A5%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%8C-1.jpg"
                                        title="Talo Capo Beach"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>หาดตะโละกาโปร์</h2>
                                        </Link>
                                    </div>
                                    <h3>ชายหาดที่ทอดยาวกว่า 10 กิโลเมตร</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[8].subDistric}</p>
                                        <p>อำเภอ : {location[8].distric}</p>
                                        <p>จังหวัด : {location[8].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[8].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://f.ptcdn.info/606/054/000/ozbacth50P8Jmz3YvIe-o.jpg"
                                        title="Sky Walk"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>Sky Walk</h2>
                                        </Link>
                                    </div>
                                    <h3>Pattani Adventure Park ( ทางเดินชมธรรมชาติ )</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[9].subDistric}</p>
                                        <p>อำเภอ : {location[9].distric}</p>
                                        <p>จังหวัด : {location[9].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[9].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://2.bp.blogspot.com/-5xNBmX0eRzk/Wb-rH67LKQI/AAAAAAAAAIE/7mcZIsWcId8UIO7O1FHs83Tn3tHfRJZswCLcBGAs/s1600/%25E0%25B8%25AB%25E0%25B8%25B2%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%258A%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%25A9%25E0%25B9%258C.jpg"
                                        title="Panare Beach"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>หาดปะนาเระ</h2>
                                        </Link>
                                    </div>
                                    <h3>ที่ที่ดีที่สุดในการดูเรือประมง kolae ที่มีชื่อเสียง</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[10].subDistric}</p>
                                        <p>อำเภอ : {location[10].distric}</p>
                                        <p>จังหวัด : {location[10].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[10].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://www.thailandtourismdirectory.go.th/th/file/get/type/thumbnail/size/1000/file/20171128a43683d33b40f413228d54e3c6ed4a2f123719.jpg"
                                        title="Yarang Ancient Town"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>เมืองโบราณยะรัง</h2>
                                        </Link>
                                    </div>
                                    <h3>ศูนย์กลางพุทธศาสนามหายานแห่งอาณาจักรลังกาสุกะ</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[11].subDistric}</p>
                                        <p>อำเภอ : {location[11].distric}</p>
                                        <p>จังหวัด : {location[11].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[11].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://sites.google.com/site/watthai58520739/_/rsrc/1523171704649/wad-rasdrburna-wad-chang-hi/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%AB%E0%B9%89_1396324742.jpg"
                                        title="Chang Hai Temple"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>วัดราษฎร์บูรณะ (วัดช้างให้)</h2>
                                        </Link>
                                    </div>
                                    <h3>วัดเก่าแก่สร้างมาแล้วกว่า 300 ปี</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[12].subDistric}</p>
                                        <p>อำเภอ : {location[12].distric}</p>
                                        <p>จังหวัด : {location[12].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[12].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://www.paaktai.com/tmp/944be3095c0b3f7e8e7ab31f9de6d5dc.jpg"
                                        title="Kae Kae Beach"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>หาดแฆแฆ</h2>
                                        </Link>
                                    </div>
                                    <h3>หาดทรายสวย โขดหินงาม แห่งปานาเระ</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[1].subDistric}</p>
                                        <p>อำเภอ : {location[1].distric}</p>
                                        <p>จังหวัด : {location[1].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[1].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://www.thailandtourismdirectory.go.th/th/file/get/type/thumbnail/size/1000/file/20171108f3597f958e797a0c291d2ec5bfef15d5173221.JPG"
                                        title="Somdet Phra Srinagarindra Park"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>สวนสมเด็จพระศรีนครินทร์ ปัตตานี</h2>
                                        </Link>
                                    </div>
                                    <h3>สวนสาธารณะเฉลิมพระเกียรติ สมเด็จพระศรีนครินทราบรมราชชนนี 80 พรรษา ลำดับที่ 12</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[2].subDistric}</p>
                                        <p>อำเภอ : {location[2].distric}</p>
                                        <p>จังหวัด : {location[2].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[2].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://img.wongnai.com/p/1920x0/2019/05/24/0b4114ad57984af29421c6f4cff81ff3.jpg"
                                        title="Wasukri Beach"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>หาดวาสุกรี</h2>
                                        </Link>
                                    </div>
                                    <h3>ปลากระโทงแทงสัญลักษณ์เมืองสายบุรีอันสวยงาม</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[3].subDistric}</p>
                                        <p>อำเภอ : {location[3].distric}</p>
                                        <p>จังหวัด : {location[3].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[3].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="content-wrapper">
                                <div className="img">
                                    <img src="https://mpics.mgronline.com/pics/Images/559000006204901.JPEG"
                                        title="Laem Tachie"
                                        style={{
                                            width: "500px"
                                        }}
                                    />
                                </div>
                                <Divider type="vertical"
                                    style={{
                                        height: "43vh",
                                        marginLeft: "40px"
                                    }}
                                />
                                <div className="content">
                                    <div className="title-content">
                                        <Link to="">
                                            <h2>ปลายสุดแหลมตาชี</h2>
                                        </Link>
                                    </div>
                                    <h3>อัญมณีแห่งปลายด้ามขวาน</h3>
                                    <div className="location-content">
                                        <p>ตำแหน่งที่ตั้ง</p>
                                        <img src="https://image.flaticon.com/icons/png/128/684/684908.png"
                                            style={{
                                                width: "15px",
                                                height: "15px",
                                                marginLeft: "10px",
                                            }}
                                        />
                                    </div>
                                    <div className="caption-content">
                                        <p>ตำบล : {location[4].subDistric}</p>
                                        <p>อำเภอ : {location[4].distric}</p>
                                        <p>จังหวัด : {location[4].province}</p>
                                        <p>รหัสไปรษณีย์ : {location[4].postalCode}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledWrapper>
                </MainLayout>
            )
        }
    }

    return (
        <div>
            {renderTravel_Page()}
        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 0;

    .title {
        margin-top: 50px;
        margin-bottom: 50px;
        text-align: center;

        h1 {
            font-family: 'Mitr';
            font-size: 40px;
            font-weight: 900;
        }
    }

    .main-content {
        margin-bottom: 100px;

        .content-wrapper {
            display: flex;
            align-items: center;

            .content {
                margin: 0;
                margin-left: 30px;
            }

            .location-content {
                display: flex;
                align-items: center;

                p {
                    margin: 0;
                }
            }

            .caption-content {
                margin-top: 10px;
                margin-left: 30px;
            }

            h2 , h3 , p {
                font-family: 'Mitr';
                font-weight: 900;
            }

            h2:hover {
                color: rgb(30,144,255);
            }
        }
    }
`
export default Travel_Page