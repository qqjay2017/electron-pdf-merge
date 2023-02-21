import styled from "styled-components";

export const FileListWrap = styled.div`
    height: 100%;
    background:#fff;
    padding:24px;
    display:flex;
    flex-wrap:wrap;

`

export const FileItem = styled.div`
    width:150px;
    height:150px;
    padding:12px;
    /* border:1px solid #333; */
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color:#fff;
    margin-right:16px;
    position:relative;
    span {
        overflow-wrap: break-word; 
        color:#555;
       
    }
`

export const FileBadge  = styled.div`
position:absolute;
right:-10px;
top:-10px;
background: #ff4d4f;
min-width: 20px;
    height: 20px;
    color: #fff;
    z-index: auto;
    
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;



`