import React, { useState, useEffect, useRef } from 'react';
import './styles/theme.css';

const SixtyDaysPage = () => {
    const [modalActive, setModalActive] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    });
    const trackRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const testimonials = [
        { initials: 'RM', name: 'Rohit Mehta', issue: 'Digestive Issues', review: '“I stopped masking symptoms and finally understood what my body needed. Digestion feels lighter now.”' },
        { initials: 'NS', name: 'Neha Sharma', issue: 'Low Energy & Fatigue', review: '“Mornings used to feel heavy. Now I wake up feeling naturally energized.”' },
        { initials: 'AV', name: 'Ankit Verma', issue: 'Joint Stiffness', review: '“The guidance was calm and logical. Movement slowly became easier.”' },
        { initials: 'PS', name: 'Pooja Singh', issue: 'Constipation', review: '“Simple hydration changes made a real difference without medicines.”' },
        { initials: 'SP', name: 'Suresh Patel', issue: 'Overall Wellness', review: '“For the first time, I feel aligned with my body instead of guessing.”' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    useEffect(() => {
        if (trackRef.current) {
            const card = trackRef.current.children[0] as HTMLElement;
            if (card) {
                const moveAmount = card.offsetWidth + 30;
                trackRef.current.style.transform = `translateX(-${moveAmount * slideIndex}px)`;
            }
        }
    }, [slideIndex]);

    const openModal = () => setModalActive(true);
    const closeModal = () => setModalActive(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // Prepare data
        const name = formData.name;
        const phone = formData.phone;
        const city = formData.city;

        // Create query string for URL (some webhooks only see this)
        const queryParams = new URLSearchParams({
            name,
            phone,
            city,
            source: '6a100days'
        }).toString();

        const webhookUrl = `https://tool.aiwhatsapp.in/webhook/329/21?${queryParams}`;

        console.log("Submitting to Webhook:", webhookUrl);
        console.log("Form Data:", { name, phone, city });

        const minDelay = new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // We send it via BOTH the URL and the Body for maximum compatibility
            const webhookPromise = fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: queryParams, // Redundant but safe
                mode: 'no-cors' // Use no-cors to bypass preflight issues if server doesn't support OPTIONS
            });

            await Promise.all([webhookPromise, minDelay]);
        } catch (error) {
            console.error("Webhook submission failed:", error);
            await minDelay;
        }

        window.location.href = "https://rzp.io/rzp/u2YpQe7";
    };

    return (
        <div className="sixty-days-module">
            {/* HERO */}
            <section className="hero">
                <h1>🚀 Become 6A in 100 Days</h1>
                <div className="hero-subtitle-div">
                    <h2>If you are already 6A or above<br />this 20k/m Flywayx Formula works like MAGIC for you.</h2>
                </div>
                <p>
                    <span className="green-highlight">No theory | No motivation | Pure execution</span>.
                </p>

                <div className="image-showcase-card">
                    <div className="image-frame">
                        <img src="https://enagic.mymarketer.in/wp-content/uploads/2026/02/6A.jpeg" alt="Preview" />
                    </div>
                </div>

                <div className="btn-group">
                    <button className="btn call-btn" onClick={openModal}>Unlock Formula NOW</button>
                </div>
            </section>

            {/* Frustration Section */}
            <section className="section2">
                <h2 className="highlight-text">❌ I know your frustration… and <span>let’s be honest</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon i1"><i className="fa-solid fa-arrow-trend-down"></i></div>
                        <p>Demos ke liye <span>log hi nahi milte</span></p>
                    </div>
                    <div className="card">
                        <div className="icon i2"><i className="fa-solid fa-arrow-trend-down"></i></div>
                        <p>Demo dete ho, <span>sale nahi hoti</span></p>
                    </div>
                    <div className="card">
                        <div className="icon i3"><i className="fa-solid fa-arrow-trend-down"></i></div>
                        <p>Mahino or saalo se same level pe <span>Stuck</span> ho</p>
                    </div>
                    <div className="card">
                        <div className="icon i4"><i className="fa-solid fa-arrow-trend-down"></i></div>
                        <p>Kabhi-kabhi <span>poore mahine ek bhi machine nahi Sell hot</span></p>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn call-btn" onClick={openModal}>Unlock Formula NOW</button>
                </div>
                <p className="mt-8">Trusted by <span>300+ individuals</span> Alkaline Water Business Owner</p>
            </section>

            {/* RISK SECTION */}
            <section className="risk-section-x2">
                <div className="risk-container-x2">
                    <div className="risk-card-x2">
                        <p className="risk-question-x2">
                            🤔 Phir se ek aur marketing gimmick?<br />
                            <strong>Bilkul sahi soch rahe ho.</strong>
                        </p>
                        <p className="risk-clarity-x2">
                            Isliye main seedhi baat karta hoon — <span>Risk aapka almost ZERO hai.</span>
                        </p>
                        <div className="risk-warning-x2">⚠️ Sirf 2 possibilities hain:</div>
                        <div className="risk-options-wrapper-x2">
                            <div className="risk-option-x2 good-option-x2">
                                <h3>Option 1</h3>
                                <p>CSC Formula aapke liye kaam karega</p>
                                <ul>
                                    <li>More demos</li>
                                    <li>Consistent sales</li>
                                    <li>6A in 100 Days</li>
                                </ul>
                            </div>
                            <div className="risk-option-x2 bad-option-x2">
                                <h3>Option 2</h3>
                                <p>Agar CSC Formula kaam nahi karta</p>
                                <ul>
                                    <li>Aapka sirf 45 Min waste</li>
                                    <li>₹299 fully refundable – After Consultation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCIENCE SECTION */}
            <section className="science-section">
                <div className="typing-div">
                    <h2 className="science-title">
                        🔥 Ab asli baat suno <br className="scrience-br" />
                        <span>(yeh ignore mat karna)</span>
                    </h2>
                </div>
                <div className="science-sub-div">
                    <p className="science-sub">Aaj agar aap is <span>CSC Formula</span> ko ignore karte ho,</p>
                    <p className="science-sub emphasis">Yeh SAME AD <span>aapke competitors</span> bhi dekh rahe hain</p>
                </div>

                <div className="science-cards">
                    <div className="science-card blue">
                        <h4 className="heading-blue">Difference sirf itna hoga:</h4>
                        <ul className="verdict-list">
                            <li className="true-item">Wo action lenge</li>
                            <li className="false-item">Aap sochte rah jaoge</li>
                        </ul>
                    </div>
                    <div className="science-card green">
                        <h4 className="heading-blue">Aur jab wo:</h4>
                        <ul className="science-list">
                            <li>Same city</li>
                            <li>Same prospects</li>
                            <li>Same market</li>
                        </ul>
                        <br />
                        <h4 className="heading-blue">mein 30 din ke andar</h4>
                        <ul className="science-list">
                            <li>Aapke leads close kar lenge</li>
                            <li>Aapke area mein authority bana lenge</li>
                            <li>Aapke prospects ke Mobile par aap se pehle pahunch jaayenge</li>
                        </ul>
                    </div>
                </div>

                <p className="science-note">Tab aap regret bhi nahi kar paoge, kyunki <br /> Game already over hoga.</p>
                <div className="btn-group">
                    <button className="btn call-btn" onClick={openModal}>Unlock Formula NOW</button>
                </div>
            </section>

            {/* FEEDBACK SLIDER */}
            <section className="health-wrapper-x9">
                <div className="slide-div">
                    <div className="health-slider-area-x9">
                        <div className="health-card-track-x9" ref={trackRef}>
                            {testimonials.map((t, i) => (
                                <div key={i} className="health-box-x9">
                                    <div className="health-avatar-x9">{t.initials}</div>
                                    <div className="health-name-x9">{t.name}</div>
                                    <div className="health-issue-x9">{t.issue}</div>
                                    <div className="health-stars-x9">★★★★★</div>
                                    <div className="health-review-x9">{t.review}</div>
                                    <div className="health-verified-x9">
                                        <i className="fa-solid fa-circle-check"></i> Verified wellness guidance
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="health-dots-x9">
                    {testimonials.map((_, i) => (
                        <span key={i} className={`health-dot-x9 ${slideIndex === i ? 'active' : ''}`} onClick={() => setSlideIndex(i)}></span>
                    ))}
                </div>
                <div className="btn-group">
                    <button className="btn call-btn" onClick={openModal}>Unlock Formula NOW</button>
                </div>
            </section>

            {/* FINAL VERDICT */}
            <section className="section2">
                <div className="csc-premium-highlight">
                    <h2 className="csc-premium-title">CSC Formula <span>30 Days</span> mein aapka</h2>
                    <h3 className="csc-premium-sub">👉 Alkaline Water Business ko <span>Transform</span> karne wala hai</h3>
                    <p className="csc-premium-warning">— but sirf unke liye jo <span>ACTION</span> lete hain.</p>
                    <div className="csc-decision-box">
                        <p>⏳ Is page se bina action liye nikalna bhi ek decision hai.</p>
                        <div className="csc-loss-lines">
                            <p>45 Min ignore kiya → <strong>6 mahine delay</strong></p>
                            <p>₹299 bachaya → <strong>Lakhs ka loss</strong></p>
                        </div>
                        <span className="csc-refund-note">(Jo already Refundable hai)</span>
                    </div>
                </div>
                <div className="btn-group">
                    <button className="btn call-btn" onClick={openModal}>Unlock Formula NOW</button>
                </div>
                <div className="roadmap-subtext-z1">
                    Market rukega nahi.<br />
                    <span style={{ color: '#2f6df6', fontWeight: 600 }}>Competitor wait karega nahi.</span>
                </div>
                <div className="market-warning-x5">
                    <div className="market-warning-text-x5">
                        <div className="market-warning-title-x5">⚠️ Warning:</div>
                        <div className="market-warning-desc-x5">
                            Slow decision lene wale log fast-moving markets mein survive nahi kar pate.
                        </div>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            <div className={`modal-overlay ${modalActive ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
                <div className="modal-box">
                    <div className="close-btn" onClick={closeModal}>&times;</div>
                    <div className="modal-icon">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h3>Let’s Take the First Step</h3>
                    <p>Aaj liya gaya ek sahi decision aapki body ke healing process ko direction deta hai.</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-box">
                            <i className="fa-solid fa-user"></i>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-box">
                            <i className="fa-solid fa-phone"></i>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="10-digit Mobile Number"
                                required
                                pattern="[0-9]{10}"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-box">
                            <i className="fa-solid fa-location-dot"></i>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                required
                                value={formData.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="continue-btn" disabled={isLoading}>
                            {isLoading ? <div className="btn-loader"></div> : "Continue"}
                        </button>
                    </form>
                    <small>Aapki details secure hain. Yeh sirf guidance ke liye hai.</small>
                </div>
            </div>

            {/* BOTTOM FIXED BAR */}
            <div className="offer-fixed-bar">
                <div className="offer-bar-inner">
                    <div className="offer-left">
                        <div className="offer-price">
                            <span className="new-price">₹99</span>
                            <span className="old-price">₹999</span>
                        </div>
                        <div className="offer-deadline">₹99 | Refundable After Meeting</div>
                    </div>
                    <div className="offer-right">
                        <button className="offer-btn" onClick={openModal}>Unlock Formula NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SixtyDaysPage;
