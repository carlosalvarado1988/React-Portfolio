import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import styled from 'styled-components';

const DemosButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
`;

const LargeButton = styled(Button)`
  width: 200px;
  height: 40px;
`;

export const About = ({ resumeData }) => {
    const navigate = useNavigate();
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>

                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}</p>

                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{resumeData.name}</span>
                                <br></br>
                                <span>{resumeData.address}</span>
                                <br></br>
                                <span>{resumeData.website}</span>
                            </p>
                        </div>

                        <DemosButtonContainer>
                            <LargeButton
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    navigate('demos/images-explore');
                                }}
                            >
                                Demos
                            </LargeButton>
                        </DemosButtonContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};
