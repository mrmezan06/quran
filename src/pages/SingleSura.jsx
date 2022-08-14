import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Table } from 'antd';

const SingleSura = () => {
    const params = useParams();
    const [sura, setSura] = useState([]);
    // const [ayah, setAyah] = useState([]);
    const fetchData = async() => {
        try {
            const response = await axios.get(`http://api.alquran.cloud/v1/surah/${params.suraNo}`);
            
            // console.log(response);

            if (response.status === 200) {
                const data = response.data.data;
                // console.log(data.ayahs);
                // data.ayahs.map(ayah => {
                //     console.log(ayah)
                // })
                setSura(data);
                // console.log(response.data);
                // console.log(sura.ayahs);
                // const d = sura.ayahs;
                // setAyah(d);
                // console.log(d);
                // d.forEach(ayah => {
                //     console.log(ayah.text);
                // });
                console.log(data);
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const columns = [
        {
            title: "#",
            dataIndex: "numberInSurah"
        },
        {
          title: "Ayah",
          dataIndex: "text",
        }];
  return (
    <div className='main'>
       <div className="sura-name-container">
            <div className='sura-name'> {sura?.name} - {sura?.englishName}</div>
       </div>
            <div className="sura-eng-translation">Translation of English: <span>{sura?.englishNameTranslation}</span></div>
        <div className="sura-ayah-revelation">
            <div className="sura-total-ayah">Total Ayah: <span>{sura?.numberOfAyahs}</span></div>
            <div className="sura-revelation-type">Revelation <span>{sura?.revelationType}</span></div>
        </div>
        <div className="seperator"></div>
        <div className="content">
        <Table columns={columns} dataSource={sura?.ayahs} />
        </div>
        
    </div>
  )
}

export default SingleSura;


/* 

<div className="content">
                    <div className="sura-ayah-content">{`ayah.text`}</div>
                    <div className="surah-details">
                    Ayah: <span>1</span> Juj: <span>30</span> Manzil: <span>7</span> Page: <span>604</span> Ruku: <span>556</span> HizbQuarter: <span>240</span> Sajda: <span>No</span>
                    </div>
                </div>
*/