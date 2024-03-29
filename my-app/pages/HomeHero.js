import React from "react";
import "./style.css";

export default function HomeHero() {
    return (
        <div className="home-hero">
            <div className="heroContainer home-hero1">
                <div className="home-container1">
                    <h1 className="home-hero-heading heading1">
                        Simple Streaming Platform
                    </h1>
                    <span className="home-hero-sub-heading bodyLarge">
                        <span>
                            <span>
                                <span>Stream your favorite content anytime, anywhere</span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                            <span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                    </span>
                    <div className="home-btn-group">
                        <button className="buttonFilled hoverableButton">Get Started</button>
                        <button className="buttonFlat hoverableButton">Learn More →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};