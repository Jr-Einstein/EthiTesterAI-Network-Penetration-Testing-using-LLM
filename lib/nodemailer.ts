import nodemailer from "nodemailer"

const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendWelcomeEmail = async (userEmail: string, userName: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `Welcome to EthiTesterAI, ${userName}! 🛡️`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to EthiTesterAI</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          }
          .container {
            background: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 28px;
            font-weight: bold;
            color: #0ea5e9;
            margin-bottom: 10px;
          }
          .welcome-title {
            font-size: 24px;
            color: #1e293b;
            margin-bottom: 20px;
          }
          .section {
            margin-bottom: 30px;
          }
          .section h3 {
            color: #0ea5e9;
            font-size: 18px;
            margin-bottom: 15px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 5px;
          }
          .feature-list {
            list-style: none;
            padding: 0;
          }
          .feature-list li {
            padding: 8px 0;
            border-left: 3px solid #0ea5e9;
            padding-left: 15px;
            margin-bottom: 10px;
            background: #f8fafc;
            border-radius: 4px;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            margin: 20px 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 14px;
          }
          .security-tip {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 8px;
            padding: 15px;
            margin: 20px 0;
          }
          .security-tip strong {
            color: #92400e;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">🛡️ EthiTesterAI</div>
            <h1 class="welcome-title">Welcome ${userName}!</h1>
            <p>Thank you for joining the future of ethical penetration testing and cybersecurity automation.</p>
          </div>

          <div class="section">
            <h3>🚀 Getting Started</h3>
            <p>Your EthiTesterAI account is now active! Here's what you can do:</p>
            <ul class="feature-list">
              <li><strong>Dashboard Overview:</strong> Monitor your security posture in real-time</li>
              <li><strong>Network Scanning:</strong> Perform comprehensive network security assessments</li>
              <li><strong>Vulnerability Assessment:</strong> Identify and prioritize security vulnerabilities</li>
              <li><strong>AI-Powered Reports:</strong> Generate detailed penetration testing reports</li>
              <li><strong>Risk Mitigation:</strong> Get actionable security recommendations</li>
            </ul>
          </div>

          <div class="section">
            <h3>📋 Quick Start Guide</h3>
            <ol>
              <li><strong>Login to Dashboard:</strong> Access your personalized security dashboard</li>
              <li><strong>Configure Network Scan:</strong> Set up your first network security assessment
                <ul style="margin-top: 10px; color: #64748b;">
                  <li>Enter target IP addresses or domains</li>
                  <li>Select scan type (Quick, Comprehensive, Custom)</li>
                  <li>Configure scope and priority levels</li>
                </ul>
              </li>
              <li><strong>Review Results:</strong> Analyze vulnerabilities and security findings</li>
              <li><strong>Generate Reports:</strong> Create professional PDF reports for stakeholders</li>
              <li><strong>Implement Mitigations:</strong> Follow AI-powered security recommendations</li>
            </ol>
          </div>

          <div class="section">
            <h3>🔧 Key Features</h3>
            <ul class="feature-list">
              <li><strong>AI-Powered Analysis:</strong> Advanced machine learning for threat detection</li>
              <li><strong>Real-time Monitoring:</strong> Continuous security posture assessment</li>
              <li><strong>Compliance Reporting:</strong> Meet industry standards and regulations</li>
              <li><strong>Integration Ready:</strong> Connect with SIEM, SOC, and security tools</li>
              <li><strong>Team Collaboration:</strong> Share findings and coordinate responses</li>
            </ul>
          </div>

          <div class="security-tip">
            <strong>🔒 Security Tip:</strong> Always ensure you have proper authorization before conducting any penetration testing activities. EthiTesterAI is designed for ethical security testing only.
          </div>

          <div class="section">
            <h3>📞 Support & Resources</h3>
            <p>Need help getting started? Our team is here to support you:</p>
            <ul class="feature-list">
              <li><strong>Documentation:</strong> Comprehensive guides and tutorials</li>
              <li><strong>Video Tutorials:</strong> Step-by-step walkthrough videos</li>
              <li><strong>Community Forum:</strong> Connect with other security professionals</li>
              <li><strong>24/7 Support:</strong> Technical assistance when you need it</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="${process.env.NEXTAUTH_URL}/dashboard" class="cta-button">
              Access Your Dashboard →
            </a>
          </div>

          <div class="footer">
            <p><strong>EthiTesterAI</strong> - Advanced Network Penetration Testing Platform</p>
            <p>© 2025 EthiTesterAI - Project Societe Generale. All rights reserved.</p>
            <p>This email was sent to ${userEmail}. If you didn't create this account, please contact our support team.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Welcome email sent successfully to:", userEmail)
  } catch (error) {
    console.error("Error sending welcome email:", error)
    throw error
  }
}

export const sendNotificationEmail = async (
  userEmail: string,
  subject: string,
  message: string,
  type: "info" | "warning" | "critical" = "info",
) => {
  const colors = {
    info: "#0ea5e9",
    warning: "#f59e0b",
    critical: "#ef4444",
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `EthiTesterAI Alert: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Inter, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .alert { 
            border-left: 4px solid ${colors[type]}; 
            background: #f8fafc; 
            padding: 20px; 
            border-radius: 8px; 
          }
          .header { color: ${colors[type]}; font-size: 18px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="alert">
            <div class="header">${subject}</div>
            <p>${message}</p>
          </div>
          <p style="margin-top: 20px; color: #64748b; font-size: 14px;">
            © 2025 EthiTesterAI - Project Societe Generale
          </p>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Notification email sent successfully")
  } catch (error) {
    console.error("Error sending notification email:", error)
    throw error
  }
}

export default transporter
