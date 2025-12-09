import { URL } from '../models/url.js'
import shortid from 'shortid';

export const handleGenerateNewShortURl = async (req, res) => {
    const body = req.body;
    console.log(body);
    if (!body.url) return res.status(400).json({ status: "Bad Request" })
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visvisitHistory: []
    });
    return res.status(200).json({ id: shortID });
}


export const handleRedirectUrl = async (req, res) => {
    const shortId = req.params.shortId;
    console.log(shortId);
    const entry = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } }, { now: true });
    if (!entry) return res.status(404).json({ status: 'Not Found ' });
    return res.status(200).redirect(entry.redirectURL);
}