import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        padding: "40px 20px",
        margin: 0,
      }}
    >
      {/* Main Container */}
      <table
        role="presentation"
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <tbody>
          {/* Header with gradient */}
          <tr>
            <td
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
                borderRadius: "16px 16px 0 0",
                padding: "40px 32px 32px",
                textAlign: "center" as const,
              }}
            >
              {/* Logo / Brand Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "14px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: "56px",
                  }}
                >
                  ✉
                </span>
              </div>

              <h1
                style={{
                  margin: "0 0 8px",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                }}
              >
                New Message Received
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.8)",
                  fontWeight: 400,
                }}
              >
                Someone reached out through your portfolio
              </p>
            </td>
          </tr>

          {/* Body */}
          <tr>
            <td
              style={{
                backgroundColor: "#ffffff",
                padding: "32px",
              }}
            >
              {/* Sender Info Card */}
              <table
                role="presentation"
                width="100%"
                cellPadding={0}
                cellSpacing={0}
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "24px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "20px 24px" }}>
                      {/* Name Row */}
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                        style={{ marginBottom: "16px" }}
                      >
                        <tbody>
                          <tr>
                            <td style={{ width: "36px", verticalAlign: "top" }}>
                              <div
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "10px",
                                  background:
                                    "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                                  textAlign: "center" as const,
                                  lineHeight: "36px",
                                  fontSize: "16px",
                                }}
                              >
                                👤
                              </div>
                            </td>
                            <td
                              style={{
                                paddingLeft: "12px",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  margin: "0 0 2px",
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  textTransform: "uppercase" as const,
                                  letterSpacing: "0.05em",
                                  color: "#94a3b8",
                                }}
                              >
                                From
                              </p>
                              <p
                                style={{
                                  margin: 0,
                                  fontSize: "15px",
                                  fontWeight: 600,
                                  color: "#1e293b",
                                }}
                              >
                                {name}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      {/* Divider */}
                      <div
                        style={{
                          height: "1px",
                          backgroundColor: "#e2e8f0",
                          margin: "0 0 16px",
                        }}
                      />

                      {/* Email Row */}
                      <table
                        role="presentation"
                        width="100%"
                        cellPadding={0}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr>
                            <td style={{ width: "36px", verticalAlign: "top" }}>
                              <div
                                style={{
                                  width: "36px",
                                  height: "36px",
                                  borderRadius: "10px",
                                  background:
                                    "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                                  textAlign: "center" as const,
                                  lineHeight: "36px",
                                  fontSize: "16px",
                                }}
                              >
                                ✉️
                              </div>
                            </td>
                            <td
                              style={{
                                paddingLeft: "12px",
                                verticalAlign: "middle",
                              }}
                            >
                              <p
                                style={{
                                  margin: "0 0 2px",
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  textTransform: "uppercase" as const,
                                  letterSpacing: "0.05em",
                                  color: "#94a3b8",
                                }}
                              >
                                Email
                              </p>
                              <a
                                href={`mailto:${email}`}
                                style={{
                                  margin: 0,
                                  fontSize: "15px",
                                  fontWeight: 600,
                                  color: "#2563eb",
                                  textDecoration: "none",
                                }}
                              >
                                {email}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Message Section */}
              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    margin: "0 0 12px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.05em",
                    color: "#94a3b8",
                  }}
                >
                  💬 Message
                </p>
                <div
                  style={{
                    backgroundColor: "#f8fafc",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    padding: "20px 24px",
                    borderLeft: "4px solid #2563eb",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "15px",
                      lineHeight: "1.7",
                      color: "#334155",
                      whiteSpace: "pre-wrap" as const,
                    }}
                  >
                    {message}
                  </p>
                </div>
              </div>

              {/* Reply CTA Button */}
              <table
                role="presentation"
                width="100%"
                cellPadding={0}
                cellSpacing={0}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        textAlign: "center" as const,
                        paddingTop: "8px",
                      }}
                    >
                      <a
                        href={`mailto:${email}?subject=Re%3A%20Portfolio%20Contact&body=Hi%20${encodeURIComponent(name)}%2C%0D%0A%0D%0AThank%20you%20for%20reaching%20out!%0D%0A%0D%0A`}
                        style={{
                          display: "inline-block",
                          background:
                            "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "12px 32px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          letterSpacing: "0.01em",
                          boxShadow: "0 4px 14px rgba(37, 99, 235, 0.35)",
                        }}
                      >
                        Reply to {name} →
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "0 0 16px 16px",
                borderTop: "1px solid #e2e8f0",
                padding: "24px 32px",
                textAlign: "center" as const,
              }}
            >
              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#64748b",
                }}
              >
                Joe John&apos;s Portfolio
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#94a3b8",
                }}
              >
                This email was sent from your contact form · © {currentYear}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
