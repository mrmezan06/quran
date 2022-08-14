import { Table } from 'antd';
import React, { useEffect } from 'react'



const Sura = () => {
    const [sura, setSura] = React.useState([]);
    const fetchData = async() => {
        try {
            const response = await fetch('http://api.alquran.cloud/v1/meta');
            
            const json = await response.json();
            const data = json.data.surahs.references;
            setSura(data);
            console.log(json);
            
        } catch (error) {
            console.log(error)
        }}
        useEffect(() => {
            fetchData();
            // eslint-disable-next-line
          }, []);

          const columns = [
            {
                title: 'Sura Name(Arabic)',
                dataIndex: 'name',
            },
            {
                title: 'Sura Name(English)',
                dataIndex: 'englishName',
            },
            {
                title: 'Number of Ayahs',
                dataIndex: 'numberOfAyahs',
            },
            {
                title: 'Revelation Type',
                dataIndex: 'revelationType',
            }
          ];
  return (
    <Table columns={columns} dataSource={sura} bordered
    title={() => 'Table of Sura'}
    />
  )
}

export default Sura