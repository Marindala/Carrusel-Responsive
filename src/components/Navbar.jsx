import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import img from "../assets/Mi.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const Container = styled.div`
    heigth: 80px;
    width: 100%;
    border-bottom: white 3px dashed;
    background-color: rgb(75, 2, 58);
    @media screen and (max-width: 770px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;

  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-item: center;
    @media screen and (max-width: 770px) {
      width: 100%;
      display: flex;
      align-item: center;
      justify-content: space-between;
    }
  `;

  const Left = styled.div`
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: space-between;
  `;
  const Right = styled.div`
    @media screen and (max-width: 770px) {
      display: flex;
    }
  `;

  const Avatar = styled.img`
height: 200px;
width: 200px;
margin.top: 60px;
border-radius: 100%;
cursor: pointer;
justify-content: space-between;
display: inline-block;

@keyframes spin {
    0% {
      transform: rotateZ(1140deg);
    }
@media screen and (max-width: 770px) {
  display: none;
  }
`;
  const Menu = styled.ul`
    display: flex;
    list-style: none;
    @media screen and (max-width: 770px) {
      height: 40px;
      display: flex;
      align-items: center;
      left: 0;
    }
  `;

  return (
    <Container id="home">
      <Wrapper>
        <Left>
          {" "}
          <a href="#home">
            <Avatar src={img} alt="Avatar" />
          </a>
          <Menu
            style={{ cursor: "pointer" }}
            className={click ? "nav-menu.active" : "nav-menu"}
          >
            {/*   <a href="#Contact" style={{ textDecoration: "none" }}>
              <li className="menuItem">Contact</li>
            </a> */}
          </Menu>
          <Right>
            <div className="hamburger" onClick={openModal}>
              {click ? (
                <FaTimes size={20} style={{ color: "fff" }} />
              ) : (
                <FaBars size={20} style={{ color: "fff" }} />
              )}
            </div>

            <Modal
              show={modalOpen}
              onHide={closeModal}
              className="modal-sidebar"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <ul>
                  <li>
                    <a href="/#Contact" className="modal-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </Modal.Body>

              <button className="button-content" onClick={closeModal}>
                Close
              </button>
            </Modal>
          </Right>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
