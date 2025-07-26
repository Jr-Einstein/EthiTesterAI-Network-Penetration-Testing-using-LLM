import nodemailer from "nodemailer"

const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const sendWelcomeEmail = async (userEmail: string, userName: string) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to EthiTesterAI</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: #ffffff; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 30px 0; background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%); border-radius: 10px; margin-bottom: 30px; }
        .logo { font-size: 28px; font-weight: bold; color: #ffffff; text-shadow: 0 0 10px rgba(14, 165, 233, 0.5); }
        .welcome-text { font-size: 24px; margin: 20px 0; color: #00f5ff; }
        .content { background: rgba(30, 41, 59, 0.8); padding: 30px; border-radius: 10px; border: 1px solid rgba(0, 245, 255, 0.2); }
        .section { margin: 25px 0; }
        .section h3 { color: #00f5ff; font-size: 18px; margin-bottom: 15px; }
        .feature-list { list-style: none; padding: 0; }
        .feature-list li { padding: 8px 0; border-left: 3px solid #00f5ff; padding-left: 15px; margin: 10px 0; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #00f5ff 0%, #3b82f6 100%); color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 20px 0; }
        .footer { text-align: center; margin-top: 40px; padding: 20px; border-top: 1px solid rgba(0, 245, 255, 0.2); color: #94a3b8; }
        .security-tip { background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 15px; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🛡️ EthiTesterAI</div>
          <div class="welcome-text">Welcome ${userName}!</div>
        </div>
        
        <div class="content">
          <div class="section">
            <h3>🚀 Getting Started</h3>
            <p>Thank you for joining EthiTesterAI! You now have access to our advanced AI-powered penetration testing platform.</p>
            
            <h4>Your First Steps:</h4>
            <ul class="feature-list">
              <li>Complete your profile setup in the dashboard</li>
              <li>Review our security guidelines and best practices</li>
              <li>Start with a basic network scan to familiarize yourself</li>
              <li>Explore our vulnerability assessment tools</li>
            </ul>
          </div>

          <div class="section">
            <h3>🔧 Platform Features</h3>
            <ul class="feature-list">
              <li><strong>Network Scanning:</strong> Comprehensive port and service discovery</li>
              <li><strong>Vulnerability Assessment:</strong> AI-powered security analysis</li>
              <li><strong>Report Generation:</strong> Professional PDF reports with findings</li>
              <li><strong>Risk Mitigation:</strong> Actionable security recommendations</li>
              <li><strong>Real-time Monitoring:</strong> Live security alerts and notifications</li>
            </ul>
          </div>

          <div class="section">
            <h3>📚 User Manual</h3>
            <h4>Dashboard Navigation:</h4>
            <ul class="feature-list">
              <li><strong>Overview:</strong> Security posture summary and recent activity</li>
              <li><strong>Network Scan:</strong> Configure and execute network assessments</li>
              <li><strong>Vulnerability Assessment:</strong> Detailed security analysis</li>
              <li><strong>Reports:</strong> View and download security reports</li>
              <li><strong>Risk Mitigation:</strong> Security recommendations and best practices</li>
              <li><strong>Settings:</strong> Account and system configuration</li>
            </ul>

            <h4>Running Your First Scan:</h4>
            <ul class="feature-list">
              <li>Navigate to "Network Scan" in the sidebar</li>
              <li>Enter your target IP address or domain</li>
              <li>Select scan type (Quick, Comprehensive, or Custom)</li>
              <li>Configure scope and priority settings</li>
              <li>Click "Start Security Scan" to begin</li>
            </ul>
          </div>

          <div class="security-tip">
            <h3>⚠️ Important Security Guidelines</h3>
            <ul>
              <li>Only test systems you own or have explicit permission to test</li>
              <li>Follow responsible disclosure practices for any vulnerabilities found</li>
              <li>Keep your findings confidential and secure</li>
              <li>Use the platform for educational and defensive purposes only</li>
            </ul>
          </div>

          <div class="section">
            <h3>🆘 Support & Resources</h3>
            <ul class="feature-list">
              <li><strong>Documentation:</strong> Comprehensive guides and tutorials</li>
              <li><strong>Community Forum:</strong> Connect with other security professionals</li>
              <li><strong>24/7 Support:</strong> Technical assistance when you need it</li>
              <li><strong>Training Materials:</strong> Enhance your cybersecurity skills</li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="${process.env.NEXTAUTH_URL}/dashboard" class="cta-button">Access Your Dashboard</a>
          </div>
        </div>

        <div class="footer">
          <p>© 2025 EthiTesterAI - Project Societe Generale</p>
          <p>Advanced AI-Powered Network Penetration Testing Platform</p>
          <p>If you have any questions, reply to this email or contact our support team.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: `"EthiTesterAI Team" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `Welcome ${userName} - Your EthiTesterAI Account is Ready!`,
    html: htmlContent,
    text: `Welcome ${userName}! Thank you for joining EthiTesterAI. Access your dashboard at ${process.env.NEXTAUTH_URL}/dashboard to get started with AI-powered penetration testing.`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Welcome email sent successfully to:", userEmail)
  } catch (error) {
    console.error("Error sending welcome email:", error)
    throw error
  }
}

export const sendNotificationEmail = async (userEmail: string, subject: string, message: string) => {
  const mailOptions = {
    from: `"EthiTesterAI Security" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: `EthiTesterAI Alert: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0f172a; color: #ffffff;">
        <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 8px;">
          <h2 style="margin: 0; color: #ffffff;">🚨 Security Alert</h2>
        </div>
        <div style="padding: 20px; background: rgba(30, 41, 59, 0.8); border-radius: 8px; margin-top: 20px;">
          <h3 style="color: #00f5ff;">${subject}</h3>
          <p>${message}</p>
          <p style="margin-top: 30px; color: #94a3b8;">
            This is an automated security notification from EthiTesterAI.<br>
            © 2025 EthiTesterAI - Project Societe Generale
          </p>
        </div>
      </div>
    `,
    text: `Security Alert: ${subject}\n\n${message}\n\nEthiTesterAI Security Team`,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Notification email sent successfully")
  } catch (error) {
    console.error("Error sending notification email:", error)
    throw error
  }
}
