import './userlist.css';
import React, {useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Edit } from '@mui/icons-material';
import { userRows } from "./DummyData";


export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'username', headerName:'User', width: 200, renderCell: (params) =>{
      return (
        <div className='userListUser'>
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 200},
    { field: 'phone', headerName: 'Phone NO', width:200},
    { field: 'gender', headerName: 'Gender', width: 130 },
    { field: 'action', headerName: 'Actions', width: 130, renderCell: (params) =>{
      return(
        <>
            <button className='userListEdit'> Edit </button>
        
          <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
        </>
      );
    },
  },
    
  ];
 

 
  
  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        />
      </div>
    
  )
}
