import { SidebarProps } from "../models/sidebar-props.interface";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {BsArrowLeftShort,BsChevronDown} from "react-icons/bs";
import {DiAtom} from "react-icons/di";
import {RiDashboardFill} from "react-icons/ri";

export function Sidebar({open,setOpen}: SidebarProps) {

const changeSideButton = () => {
    setOpen(!open);
};

    const [subMenuOpen,setSubMenuOpen] = useState(false);
    return <Container>
        <div className="container">
            <div className={!open ? "back-screen active": "back-screen"}>
                <BsArrowLeftShort className={!open ? "bg-icon rotate" : "bg-icon"}/>
                <div className="logo">
                    <DiAtom className={!open ? "logo-icon size" : "logo-icon"}/>
                    <h1 className={!open ? "logo-text scale" : "logo-text "}>Syslab</h1>
                </div>
                <ul className="menu"></ul>
            </div>
        </div>
    </Container>
}
 export const Container = styled.div`

    .container{
        grid-template-columns: 288px auto;
        .back-screen{
            background-color: #171d29;
            height: 100vh;
            padding: 1.25rem;
            padding-top: 2rem;
            width: 18rem;
            position: relative;
            transition-duration: 300ms;

            &.active{
                width: 5rem;
            }
            .bg-icon{
                background-color: #ffffff;
                color:#171d29;
                font-size: 1.5rem;
                border-radius: 100%;
                position: absolute;
                right: -12px;
                top: 2.5rem;
            }

        }
    }
 `;
