"use client";
import Renderer from "@/classes/Renderer";
import { Component } from "react";

export default class Background extends Component {
    componentDidMount(): void {
        new Renderer('home-canvas');
    }

    render() {
        return <canvas id="home-canvas" />;
    }
};