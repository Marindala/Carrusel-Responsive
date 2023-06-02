import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import img from "../assets/Mi.png";

const Container = styled.div`
  margin: 0;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #eeef9bb5;
  @media screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
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
  text-align: center;
`;
const Right = styled.div`
  @media screen and (max-width: 770px) {
    display: flex;
  }
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
  margin.top: 60px;
  border-radius: 100%;
  cursor: pointer;
  justify-content: space-between;
  display: inline-block;

  @media screen and (max-width: 770px) {
    display: none;
    text-align: center;
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

const Navbar = () => {
  const [click] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <a
            href="https://www.linkedin.com/in/marina~lopez/"
            target="_blank"
            rel="noreferrer noopener"
          >
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
                    <a
                      href="https://www.linkedin.com/in/marina~lopez/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="modal-link"
                    >
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
