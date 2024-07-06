import styled from "styled-components";
import { STYLE_GUIDE } from "../../assets/Style/global";

export const SidebarContainer = styled.div`
    height: 100vh;
    width: 223px;
    background-color: ${STYLE_GUIDE.color.grayLight};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SidebarWrapper = styled.div`
    display: flex;
    align-items: center;
    padding-inline: 32px;
    padding-block: 40px;
    gap: 8px;
`
export const SidebarTitle = styled.h3`
    font-family: ${STYLE_GUIDE.fontFamily};
    color: ${STYLE_GUIDE.color.primary};
    font-size: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.2px;
`
export const SidebarImage = styled.img`
    width: 39px;
`
export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
`

export const SidebarItem = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${STYLE_GUIDE.color.primary};
    border-radius: 10px;
    
    display: flex;
    align-items: center;  
    justify-content: center;  
    gap: 12px;
    padding-inline: 15px;
`
export const SidebarText = styled.p`
    font-family: ${STYLE_GUIDE.fontFamily};
    font-size: 16px;
    font-weight: 800;
    color: ${STYLE_GUIDE.color.white};

`

export const Footer = styled.div`
    height: 100%;
    display: flex;
    align-items: end;
    margin-bottom: 100px;
`
export const FooterContent = styled.a`
    display: flex;
    gap: 12px;
    text-decoration: none;
    color: ${STYLE_GUIDE.color.grayDark}

`
export const SidebarFooterText = styled.p`
    
`