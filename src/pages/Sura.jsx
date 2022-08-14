import { Table } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sura = () => {
  const [sura, setSura] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://api.alquran.cloud/v1/meta");

      if (response.status === 200) {
        const data = response.data.data.surahs.references;
        setSura(data);
        // console.log(response.data);
      }
    } catch (error) {
    //   console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      title: "Sura Name(Arabic)",
      dataIndex: "name",
    },
    {
      title: "Sura Name(English)",
      dataIndex: "englishName",
    },
    {
      title: "Number of Ayahs",
      dataIndex: "numberOfAyahs",
    },
    {
      title: "Revelation Type",
      dataIndex: "revelationType",
    },
    {
      title: "Read Sura",
      dataIndex: "number",
      render: (text, record) => (
        <Link to={`/singleSura/${record.number}`}>Read</Link>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={sura}
      bordered
      title={() => "Table of Surah"}
    />
  );
};

export default Sura;
