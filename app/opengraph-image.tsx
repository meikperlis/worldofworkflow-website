import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WorldofWorkflow – Automatisierung, KI-Workflows & digitale Prozesse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 20% 20%, #1a2f55 0%, #0a1224 55%, #050813 100%)",
          color: "#f5f7fb",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo + Marke */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
            }}
          >
            <svg width="68" height="68" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(-281.6 -281.6) scale(1.55)">
                <path
                  fill="#003366"
                  d="M512.864 393.212C527.925 391.795 545.259 397.847 555.883 408.61C562.021 414.828 566.185 422.936 570.583 430.428C575.786 439.47 581.168 448.406 586.728 457.232C570.981 450.75 549.365 449.091 534.779 459.521C522.756 468.118 512.745 486.361 504.83 498.975L467.223 558.242C458.753 571.816 449.45 587.868 439.835 600.429C421.211 624.76 385.325 636.131 355.698 628.288C333.856 622.362 314.736 609.063 301.58 590.647C296.79 583.883 290.372 572.192 286.032 564.765C274.199 544.354 262.788 523.701 251.809 502.818C244.764 489.389 237.911 476.612 232.652 462.329C236.821 468.297 240.41 474.619 244.762 480.714C268.775 514.619 304.824 561.116 351.223 557.511C375.902 555.594 391.514 540.552 402.487 520.284C405.959 513.871 411.913 504.954 416.028 498.723C434.034 471.45 450.833 443.362 468.856 416.177C477.46 403.467 497.555 394.467 512.864 393.212Z"
                />
                <path
                  fill="#0B25FC"
                  d="M558.306 461.159C568.594 459.401 581.885 462.608 589.949 469.291C598.521 476.397 604.258 487.794 610.094 497.303L625.871 522.93C633.27 535.083 641.021 547.018 649.116 558.719C663.199 579.468 674.465 592.103 701.314 582.628C690.296 598.472 680.514 615.593 663.721 625.156C642.093 635.869 620.147 634.863 600.233 620.537C589.698 612.959 585.768 603.357 579.639 592.362C575.063 584.221 570.329 576.169 565.44 568.212C554.179 550.066 541.466 532.782 530.528 514.568C516.975 491.999 533.214 464.769 558.306 461.159Z"
                />
                <path
                  fill="#003366"
                  d="M747.772 394.184C769.839 391.967 788.818 409.592 789.383 431.53C789.616 438.085 788.214 444.595 785.304 450.473C781.504 458.182 774.236 468.712 769.314 476.129C757.303 494.229 745.109 512.12 733.138 530.27C728.579 537.142 724.088 544.058 719.664 551.018C710.463 565.597 706.619 575.8 686.752 575.359C664.808 572.709 652.769 543.828 642.83 526.669C658.786 501.809 674.613 476.866 690.311 451.841L705.97 427.034C717.057 409.542 725.296 396.621 747.772 394.184Z"
                />
              </g>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              WorldofWorkflow
            </span>
            <span style={{ fontSize: 20, color: "#9aa6c1", marginTop: 4 }}>
              Inhaber: Meik Perlis
            </span>
          </div>
        </div>

        {/* Claim */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 82,
              lineHeight: 1.02,
              fontWeight: 700,
              letterSpacing: -3,
              maxWidth: 1000,
            }}
          >
            Automatisierung,
            <br />
            KI-Workflows &amp;
            <br />
            digitale Prozesse.
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 28,
              color: "#9aa6c1",
              maxWidth: 880,
              lineHeight: 1.3,
            }}
          >
            Persönliche Fachpräsenz für Microsoft 365, n8n, Power Automate und KI-Agenten.
          </p>
        </div>

        {/* Footer-Zeile */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b7896",
            fontSize: 22,
          }}
        >
          <span>worldofworkflow.de</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#0B25FC",
                display: "inline-block",
              }}
            />
            Praxisnah · verständlich · seriös
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
