import express from "express";
import urlRoutes from "../router/url.js";
import cors from 'cors';

export const middlware = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use('/url', urlRoutes);
}
