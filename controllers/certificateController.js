// controllers/certificateController.js
const Certificate = require('../models/Certificate');

exports.createCertificate = async (req, res) => {
  try {
    const {
      studentId,
      type,
      issueDate,
      admissionDate,
      leavingDate,
      reasonForLeaving,
      conduct
    } = req.body;

    const certificateData = {
      studentId,
      type,
      issueDate,
    };

    if (type === 'Leaving' || type === 'Transfer') {
      certificateData.admissionDate = admissionDate;
      certificateData.leavingDate = leavingDate;
      certificateData.reasonForLeaving = reasonForLeaving || '';
      certificateData.conduct = conduct || '';
    }

    const certificate = new Certificate(certificateData);
    await certificate.save();

    res.status(201).json(certificate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().populate('studentId');
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
