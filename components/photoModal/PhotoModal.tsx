"use client"
import React from 'react'
import { useState } from 'react'
import style from './PhotoModal.module.css';
import { FileModal } from '../../utils/types';
import { uploadFile } from "@/firebase/config";
import { useUpdateImageUserMutation } from '@/lib/redux/service/updateUsersAPI';
import axios from 'axios';

const PhotoModal = ({update, onChange, close, id}:FileModal) => {

  const [mutate, {data}]=useUpdateImageUserMutation()
  
  const changeImage=async ()=>{

    if(update!==""){
      try {
        const urlImage=await uploadFile(update)
        console.log(urlImage)
        await mutate({
          id:id,
          image:urlImage
        })
        console.log("imagen actualizada con exito")
      } catch (error) {
        console.log("error al actualizar la imagen")
      }

    

    }
  }
  return (

    <div className={style.inputFile}>
      <div className={style.container}> 
        <div className={style.header}> 
          <svg className={style.headerSvg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
            <p>{update!=="" ? `file selected` : "Browse File to upload!"}</p>
        </div> 
        <label htmlFor="file" className={style.footer}> 
          <p className={style.footerP}>Select file</p> 
        </label> 
        <input className={style.file} id='file' type="file" onChange={onChange}/> 
        <button className={style.closeButton} onClick={close}>X</button>
        <button className={style.changeButton} onClick={changeImage}>Change</button>
      </div>
    </div>
  )
}
export default PhotoModal