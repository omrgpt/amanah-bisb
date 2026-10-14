(() => {
  const STORAGE_KEY = "amanah-us-demo-v2";
  const LOCALE_KEY = "amanah-us-locale";
  const FEEDBACK_KEY = "amanah-touch-feedback";
  const NAV = 1.0762;
  const SCENARIO_TICKER = "ASMC";
  const SCENARIO_TRANSFER = {
    id: "POOL-DEMO-026",
    receipt: "DEMO-POOL-026",
    amount: 42.670,
    customerAllocation: 0.003,
    date: "2026-10-02",
    status: "Remitted · sample"
  };

  const WORDS = {
    en: {
      overview: "Home", portfolio: "Portfolio", profile: "Suitability & disclosures", invest: "Invest", sharia: "Sharia activity", purification: "Purification", redeem: "Redeem", activity: "Activity & documents", preferences: "Preferences",
      menu: "YOUR AMANAH", more: "More", concept: "PROPOSED CONCEPT", demoNoticeTitle: "Proposed demo · not live", demoNoticeBody: "No BISB, CBB or Sharia approval is established. All values and activity are synthetic sample data.", sample: "Sample", illustrative: "Illustrative", overviewEyebrow: "Amanah US · sample account", overviewDesc: "See your sample value, contribute and compare options.", portfolioTitle: "Your portfolio", portfolioDesc: "A proposed BHD-denominated fund that would hold screened U.S. shares. You would own redeemable fund units, not the underlying shares.", profileDesc: "A short practice profile and proposed product disclosures. Nothing here is a production suitability decision or personal investment advice.", investDesc: "Make a one-time sample contribution or set a recurring instruction.", shariaDesc: "Review sample screening decisions, corrections and the dated audit trail.", purificationDesc: "Review dividend attribution and a pooled charity transfer record. An account allocation is not an individual payment receipt.", redeemDesc: "Estimate a partial or full unit redemption at an illustrative NAV and follow the simulated dealing stages.", activityDesc: "Browse simulated orders, screening events, purification records and downloadable sample documents.", preferencesDesc: "Choose language, manage demo data and review local browser storage settings.", moreDesc: "Open tools, activity records and settings.",
      portfolioValue: "Portfolio value", unitBalance: "Fund units", unitNav: "Illustrative unit NAV", dayMove: "Illustrative 1-day move", simulatedCash: "Demo cash ledger", availableUnits: "Available units", marketPulse: "Market & FX context", portfolioTrend: "Portfolio value · sample history", sampleSeries: "Illustrative sample series", recentActivity: "Recent activity", seeAll: "See all activity", addFunds: "Contribute", redeemUnits: "Redeem", reviewPortfolio: "View portfolio", startProfile: "Start demo profile", profileCompleted: "Profile recorded", profileNotStarted: "Profile not started", getStarted: "Getting started", welcomeProfile: "Complete a short practice profile", welcomeProfileBody: "No name, account number or identity details are collected. Your choices stay in this browser.", profileAction: "Continue profile", unitsNote: "Units in the proposed fund · sample", navNote: "Per unit · sample dealing price", returnNote: "Past demo movements do not predict future results", cashNote: "No bank account is linked", marketNote: "U.S. equity prices and USD/BHD conversion can both affect BHD NAV. The example FX reference is a model input, not a live quote.", lossTitle: "Investment and liquidity risk", lossBody: "Your unit value can fall and you may get back less than you invested. Currency movements, dealing cutoffs and settlement timing can affect outcomes. No return, liquidity or principal is guaranteed.",
      fundHoldings: "Fund holdings", fundHoldingsDesc: "Illustrative sample issuers and screening records. Decisions are not a live assessment of any real company.", holding: "Illustrative holding", allocation: "Allocation", valueBhd: "Value · BHD", screenStatus: "Sample screen status", reviewDate: "Review date", action: "Action", viewRecord: "View record", unitsOfFund: "Fund units", demoIssuer: "Sample U.S. equity", fundOwns: "The proposed fund owns the underlying shares. Customers own fund units.", blocked: "Allocation paused", screened: "Screened in sample", underReview: "Review required · sample", holdingDetail: "Holding screening record", currentSampleStatus: "Current sample status", sourceVintage: "Source & data vintage", decisionRecord: "Decision record", reviewTrail: "Review and action history", sourceName: "Illustrative disclosure feed", screenMethod: "Proposed sample screen set v0.3", screenMethodBody: "A sample financial screen using the disclosures available for the modeled review date. Methodology, thresholds, providers and authority remain to be agreed.", statusDisclaimer: "Sample only · not a current issuer assessment or Sharia ruling", noLiveData: "No live market, issuer or screening data is connected.",
      oneTime: "One-time", recurring: "Recurring", amount: "Amount", amountBhd: "Amount · BHD", estimatedUnits: "Estimated units", estimatedCosts: "Illustrative costs", dealingDate: "Assumed dealing date", cutoff: "Illustrative cutoff", orderPreview: "Order estimate", orderHistory: "Subscription orders", noOrders: "No subscription orders yet", noOrdersBody: "A new sample order will appear here and in Activity.", createSubscription: "Create simulated order", createInstruction: "Create recurring instruction", minGuide: "BHD 25 is a demo input guide only, not a verified product minimum.", costAssumption: "Transaction-cost assumption", costAssumptionValue: "0.45% · illustrative", navAssumption: "Dealing NAV assumption", nextDealing: "Next sample dealing day", cutoffValue: "11:00 Bahrain time · sample", fxAssumption: "USD/BHD model input", fxValue: "0.376 · illustrative", noPayment: "No payment or bank connection is made. This only writes demo data in this browser.", orderReceived: "Received", orderPriced: "Priced", orderSettled: "Settled", advanceOrder: "Advance demo stage", stageComplete: "All shown stages are sample only", orderId: "Sample order ID", subscriptionDetail: "Simulated subscription request", recurringAmount: "Monthly BHD amount", nextRun: "Next sample run", active: "Active · sample", paused: "Paused · sample", cancelled: "Cancelled · sample", pause: "Pause", resume: "Resume", cancel: "Cancel", recurringHistory: "Recurring instructions", noRecurring: "No recurring instructions", createRecurring: "Create instruction", recurringHelp: "A recurring instruction is only a local reminder in this demo. It does not schedule or debit a real payment.",
      suitabilityTitle: "Practice investor profile", suitabilityBody: "This short exercise demonstrates the questions a proposed fund journey might ask. It does not decide whether the fund is suitable for you.", horizon: "How long could you leave this investment untouched?", horizonShort: "Under 3 years", horizonMedium: "3–5 years", horizonLong: "More than 5 years", lossQuestion: "If your investment fell 20% in a year, what would you most likely do?", lossSell: "Sell most of it", lossWait: "Wait and review", lossStay: "Stay invested", liquidityQuestion: "Could you need this money for essential expenses in the next 3 years?", liquidityYes: "Yes, likely", liquidityNo: "No, unlikely", amountPlan: "Possible monthly amount · BHD", riskAck: "I understand this is a volatile equity investment concept, may lose value, and does not promise access on demand or protection of principal.", saveProfile: "Save practice profile", profileSaved: "Practice profile saved in this browser", profileSavedBody: "This is not a suitability assessment, investment recommendation or approval to invest.", noIdentity: "No identity data requested", proposedMandate: "Proposed mandate", proposedMandateBody: "A BHD-denominated unitized fund concept holding a diversified portfolio of directly screened U.S. shares through proposed licensed service providers. The customer owns redeemable fund units.", feesTitle: "Fees and dealing terms", feesBody: "Final management, custody, administration, execution, FX, dealing and redemption fees and terms are not set. Any preview assumptions elsewhere are examples only; provider quotes are outstanding.", approvalTitle: "Approvals and providers", approvalBody: "No BISB, CBB, Sharia Supervisory Board, operator, custodian or provider approval is established. Fund structure, contracts, rulebook and service providers remain proposals.", riskDisclosure: "Risk disclosure", riskBody: "Equity and currency losses are possible. A redemption would follow proposed cutoffs, NAV pricing and settlement terms, which are not finalized. Liquidity is not guaranteed.", suitabilityDisclosure: "Suitability and advice", suitabilityBody: "This prototype is not investment advice and does not collect identity or conduct production KYC, AML or suitability checks.", screeningDisclosure: "Screening and late changes", screeningDisclosureBody: "Screening depends on available company disclosures and data vintages. Undisclosed changes cannot be known in real time; later corrections may affect holdings, income and historical allocations.",
      scenarioTitle: "Guided financial restatement", scenarioBody: "Run one sample incident from a late issuer-data correction through an allocation pause, affected-income reconstruction and a pooled charity transfer record. Every stage and approval shown is simulated.", runScenario: "Run restatement scenario", scenarioDone: "Scenario recorded", scenarioAlreadyDone: "Scenario already recorded", scenarioRecords: "Original and corrected records", originalRecord: "Original published data", correctedRecord: "Restated sample data", reportedRatio: "Reported ratio", revisedRatio: "Restated ratio", sampleLimit: "Illustrative sample limit", sampleRecordDate: "Record dates · illustrative", publishedDate: "Published", discoveredDate: "Correction received", thresholdNote: "Sample threshold only · not an approved Sharia limit", stopAllocation: "New allocations to this sample holding paused pending proposed review", incomeRebuilt: "Affected sample income reconstructed", charityTransferRecorded: "Pooled transfer record added", scenarioTrace: "Scenario audit trail", underlyingCause: "A later sample disclosure changed the modeled review result. It does not describe a real issuer event.", reviewNeeded: "Review required · new sample allocations paused", noScenario: "The guided scenario has not been run", noScenarioBody: "Run it to see original and restated data preserved with separate dates, the sample holding action and linked purification entries.", scenarioLink: "Linked record", correctionId: "Correction record", sampleApproval: "Simulated approval record", proposedReview: "Pending proposed governance review",
      ledgerTitle: "Purification ledger", ledgerDesc: "Illustrative dividend attribution, factor versions and pooled charity transfer entries.", ledgerStatus: "Sample ledger status", attribution: "Customer allocation", pooledAmount: "Pooled fund amount", factorSource: "Factor source / version", period: "Income period", calculation: "Calculation", receiptTitle: "Pooled charity transfer receipt", receiptBody: "This sample receipt records a transfer by the proposed fund for the pooled amount shown. Your allocated amount is a reconciliation entry only; it is not a separate customer bank transfer or individual receipt.", downloadPoolReceipt: "Download pooled receipt", noIndividualReceipt: "No individual receipt for customer allocation", pending: "Pending · sample", calculated: "Calculated · sample", remitted: "Remitted · sample", dividendAttribution: "Dividend attribution", correctionAttribution: "Restatement income correction", pooledTransfer: "Pooled charity transfer", noLedger: "No ledger entries", noLedgerBody: "Sample purification entries will appear here.",
      redemptionMode: "Redemption amount", partial: "Partial units", full: "All available units", unitsToRedeem: "Units to redeem", estimatedProceeds: "Estimated proceeds", estimatedPnl: "Illustrative gain / loss vs. sample cost", possibleLoss: "Your redemption value may be below what you invested. This estimate is not a quote; the dealing NAV may move before pricing.", redeemCutoff: "Illustrative request cutoff", redemptionStages: "Redemption stages", redemptionHistory: "Redemption requests", createRedemption: "Submit simulated redemption", redeemReceived: "Received", redeemPriced: "Priced", redeemSettled: "Settled", redeemCredited: "Credited", advanceRedemption: "Advance demo stage", noRedemptions: "No redemption requests yet", noRedemptionsBody: "A new simulated request will appear here and in Activity.", reserved: "Reserved for open requests", redemptionTerms: "Timing and liquidity", redemptionTermsBody: "The proposed cutoff, pricing and settlement schedule is not final. The demo shows stages only; there is no instant access, transfer or principal protection.",
      allActivity: "All activity", ordersFilter: "Orders", shariaFilter: "Sharia records", docsTitle: "Sample documents", docsDesc: "Downloads contain synthetic demo records and are not official statements or bank receipts.", downloadStatement: "Download sample statement", activityEmpty: "No activity yet", activityEmptyBody: "Your simulated actions will be recorded here.", today: "Today", eventScreening: "Sample screening completed", eventDividend: "Sample dividend attribution calculated", eventPooled: "Pooled sample transfer recorded", eventSubscription: "Sample subscription settled", eventProfile: "Practice profile saved", eventScenarioRestatement: "Restated issuer data received", eventScenarioBlock: "Allocation pause recorded", eventScenarioIncome: "Affected income reconstructed", eventScenarioTransfer: "Pooled charity transfer recorded", eventOrderReceived: "Subscription order received", eventOrderPriced: "Subscription order priced", eventOrderSettled: "Subscription order settled", eventRecurringCreated: "Recurring instruction created", eventRecurringPaused: "Recurring instruction paused", eventRecurringResumed: "Recurring instruction resumed", eventRecurringCancelled: "Recurring instruction cancelled", eventRedemptionReceived: "Redemption request received", eventRedemptionPriced: "Redemption request priced", eventRedemptionSettled: "Redemption request settled", eventRedemptionCredited: "Simulated redemption credited", activityDetails: "Sample activity record", eventNoAmount: "No cash movement · browser-only demo", nextStage: "Next sample stage", download: "Download", downloadDone: "Sample file downloaded", receiptNotPersonal: "Pooled fund record only · no individual customer receipt is issued.",
      localeTitle: "Display language", localeBody: "Arabic will use a right-to-left layout. Legal and product copy is demo translation only.", resetTitle: "Reset demo data", resetBody: "Restore the original sample account and remove simulated actions stored in this browser?", resetDemo: "Reset demo", resetConfirm: "Reset the local Amanah demo data?", resetDone: "Demo reset to the original sample state.", localStorageTitle: "Local demo storage", localStorageBody: "Only synthetic Amanah demo state and your selected language are stored in this browser. No account, identity or bank data is collected.", preferencesCaution: "Use this reset only if you want to clear this browser's sample activity.", close: "Close", cancelAction: "Cancel", confirm: "Confirm", statusLabel: "Status", dateLabel: "Date", amountLabel: "Amount", sourceLabel: "Source", versionLabel: "Version", actionsLabel: "Actions", detailLabel: "Details", demoOnly: "Demo only", navBack: "Back", footerLine: "Amanah US concept demo · synthetic browser data only", basedOn: "Illustrative sample figures", amountError: "Enter a valid amount of at least BHD 25 for this sample flow.", unitsError: "Enter a valid number of units within your available balance.", acknowledgeError: "Please acknowledge the sample risk statement to continue.", saved: "Saved in this browser", stepReceived: "Received", stepPriced: "Priced", stepSettled: "Settled", stepCredited: "Credited", currencyCode: "BHD", localeArabic: "العربية", localeEnglish: "English", langEnglishShort: "EN", langArabicShort: "عربي", record: "Record", costBasis: "Sample average cost", profileState: "Practice profile status", runAgain: "Scenario already run", payout: "Simulated cash ledger update", valueAfter: "Illustrative value after order", valueBefore: "Illustrative value before order", dataCutoff: "Data last modeled", notLive: "Not live", accountActivity: "Account activity", pooledReceiptId: "Pooled receipt reference", reviewStatus: "Sample review status", notFinal: "Not final", dueDate: "Assumed date", noIdentityNote: "We do not ask for your name, national ID, account number or bank credentials.", financialDataWarning: "Figures, return history, NAV, exchange-rate inputs, fees, dates, holdings and status labels on this page are synthetic demo data.", emptyHint: "Choose a section from the navigation to explore the simulated journey.", refreshNote: "Refresh-safe demo state", openSettings: "Open preferences", showDisclosures: "Read disclosures", startScenario: "Explore scenario", allValues: "All shown values are sample data"
    },
    ar: {
      overview: "الرئيسية", portfolio: "المحفظة", profile: "الملاءمة والإفصاحات", invest: "استثمر", sharia: "النشاط الشرعي", purification: "التطهير", redeem: "استرداد الوحدات", activity: "النشاط والمستندات", preferences: "التفضيلات",
      menu: "أمانة", more: "المزيد", concept: "مفهوم مقترح", demoNoticeTitle: "عرض مقترح · ليس منتجاً متاحاً", demoNoticeBody: "لم تثبت موافقات بنك البحرين الإسلامي أو مصرف البحرين المركزي أو الهيئة الشرعية. جميع القيم والأنشطة بيانات تجريبية افتراضية.", sample: "بيانات تجريبية", illustrative: "توضيحي", overviewEyebrow: "أمانة الولايات المتحدة · حساب تجريبي", overviewDesc: "راجع قيمة العينة وأضف مبلغاً وقارن الخيارات.", portfolioTitle: "محفظتك", portfolioDesc: "مفهوم صندوق مقترح مقوم بالدينار البحريني يستثمر في أسهم أمريكية مجتازة للفحص. يملك العميل وحدات قابلة للاسترداد ولا يملك الأسهم الأساسية مباشرة.", profileDesc: "ملف تدريبي موجز وإفصاحات المنتج المقترح. لا يمثل ذلك قرار ملاءمة فعلياً أو مشورة استثمارية شخصية.", investDesc: "أنشئ مساهمة تجريبية لمرة واحدة أو حدد تعليمات دورية.", shariaDesc: "راجع نتائج الفحص والتصحيحات وسجل التدقيق التجريبي المؤرخ.", purificationDesc: "راجع إسناد توزيعات الأرباح وسجل التحويل الخيري المجمع. المبلغ المخصص لحسابك ليس إيصال دفع فردياً.", redeemDesc: "قدّر استرداداً جزئياً أو كاملاً للوحدات بسعر صافي أصول توضيحي وتابع مراحل المعالجة المحاكية.", activityDesc: "استعرض الطلبات المحاكية وأحداث الفحص والسجلات القابلة للتنزيل.", preferencesDesc: "اختر اللغة وأدر بيانات العرض التجريبي وراجع التخزين المحلي للمتصفح.", moreDesc: "افتح الأدوات والسجلات والإعدادات.",
      portfolioValue: "قيمة المحفظة", unitBalance: "وحدات الصندوق", unitNav: "صافي قيمة الوحدة التوضيحي", dayMove: "التغير اليومي التوضيحي", simulatedCash: "سجل النقد التجريبي", availableUnits: "الوحدات المتاحة", marketPulse: "السوق والعملات", portfolioTrend: "قيمة المحفظة · سجل تجريبي", sampleSeries: "سلسلة توضيحية افتراضية", recentActivity: "النشاط الأخير", seeAll: "عرض كل النشاط", addFunds: "اشتراك", redeemUnits: "استرداد الوحدات", reviewPortfolio: "عرض المحفظة", startProfile: "بدء الملف التدريبي", profileCompleted: "تم حفظ الملف التدريبي", profileNotStarted: "لم يبدأ الملف التدريبي", getStarted: "ابدأ هنا", welcomeProfile: "أكمل ملفاً تدريبياً موجزاً", welcomeProfileBody: "لا نجمع الاسم أو رقم الحساب أو بيانات الهوية. تبقى اختياراتك في هذا المتصفح.", profileAction: "متابعة الملف", unitsNote: "وحدات في الصندوق المقترح · بيانات تجريبية", navNote: "لكل وحدة · سعر تداول افتراضي", returnNote: "أداء العرض التجريبي السابق لا يتنبأ بالنتائج المستقبلية", cashNote: "لا يوجد حساب مصرفي مرتبط", marketNote: "قد تؤثر أسعار الأسهم الأمريكية وتحويل الدولار إلى الدينار على صافي قيمة الوحدة. سعر الصرف مثال حسابي وليس سعراً مباشراً.", lossTitle: "مخاطر الاستثمار والسيولة", lossBody: "قد تنخفض قيمة وحداتك وقد تسترد مبلغاً أقل مما استثمرت. قد تؤثر تحركات العملات ومواعيد التداول والتسوية في النتيجة. لا يوجد عائد أو سيولة أو حماية لرأس المال مضمونة.",
      fundHoldings: "موجودات الصندوق", fundHoldingsDesc: "جهات إصدار وسجلات فحص تجريبية. لا تمثل القرارات تقييماً مباشراً لأي شركة حقيقية.", holding: "موجود تجريبي", allocation: "التخصيص", valueBhd: "القيمة · دينار بحريني", screenStatus: "حالة الفحص التجريبية", reviewDate: "تاريخ المراجعة", action: "الإجراء", viewRecord: "عرض السجل", unitsOfFund: "وحدات الصندوق", demoIssuer: "سهم أمريكي تجريبي", fundOwns: "يمتلك الصندوق المقترح الأسهم الأساسية. يملك العملاء وحدات الصندوق.", blocked: "تم إيقاف التخصيص", screened: "اجتاز الفحص التجريبي", underReview: "يتطلب مراجعة · تجريبي", holdingDetail: "سجل فحص الموجود", currentSampleStatus: "الحالة التجريبية الحالية", sourceVintage: "المصدر وتاريخ البيانات", decisionRecord: "سجل القرار", reviewTrail: "سجل المراجعة والإجراء", sourceName: "مصدر إفصاح توضيحي", screenMethod: "مجموعة فحص تجريبية مقترحة v0.3", screenMethodBody: "فحص مالي تجريبي يستند إلى الإفصاحات المتاحة في تاريخ المراجعة المفترض. لم تعتمد المنهجية أو الحدود أو المزودون أو الجهة صاحبة القرار.", statusDisclaimer: "للتجربة فقط · ليس تقييماً حالياً للجهة أو حكماً شرعياً", noLiveData: "لا توجد بيانات مباشرة للسوق أو الجهات أو الفحص.",
      oneTime: "لمرة واحدة", recurring: "دوري", amount: "المبلغ", amountBhd: "المبلغ · دينار بحريني", estimatedUnits: "الوحدات المقدرة", estimatedCosts: "التكاليف التوضيحية", dealingDate: "تاريخ التداول المفترض", cutoff: "موعد الإقفال التوضيحي", orderPreview: "تقدير الطلب", orderHistory: "طلبات الاشتراك", noOrders: "لا توجد طلبات اشتراك بعد", noOrdersBody: "سيظهر الطلب التجريبي الجديد هنا وفي النشاط.", createSubscription: "إنشاء طلب محاكاة", createInstruction: "إنشاء تعليمات دورية", minGuide: "25 ديناراً حد إدخال للعرض فقط، وليس حداً أدنى مؤكداً للمنتج.", costAssumption: "افتراض تكلفة العملية", costAssumptionValue: "0.45% · توضيحي", navAssumption: "افتراض صافي قيمة الوحدة", nextDealing: "يوم التداول التجريبي التالي", cutoffValue: "11:00 بتوقيت البحرين · افتراضي", fxAssumption: "مدخل نموذج الدولار/الدينار", fxValue: "0.376 · توضيحي", noPayment: "لا يتم الدفع أو الربط المصرفي. تُسجل بيانات العرض فقط في هذا المتصفح.", orderReceived: "مستلم", orderPriced: "تم التسعير", orderSettled: "تمت التسوية", advanceOrder: "تقديم المرحلة التجريبية", stageComplete: "جميع المراحل المعروضة تجريبية", orderId: "معرف الطلب التجريبي", subscriptionDetail: "طلب اشتراك محاكى", recurringAmount: "المبلغ الشهري بالدينار", nextRun: "التنفيذ التجريبي التالي", active: "فعال · تجريبي", paused: "موقوف مؤقتاً · تجريبي", cancelled: "ملغى · تجريبي", pause: "إيقاف مؤقت", resume: "استئناف", cancel: "إلغاء", recurringHistory: "التعليمات الدورية", noRecurring: "لا توجد تعليمات دورية", createRecurring: "إنشاء تعليمات", recurringHelp: "التعليمات الدورية تذكير محلي في العرض فقط. لا تنشئ موعد دفع ولا تخصم مبلغاً حقيقياً.",
      suitabilityTitle: "ملف المستثمر التدريبي", suitabilityBody: "يوضح هذا التمرين الأسئلة التي قد تتضمنها رحلة صندوق مقترح. ولا يحدد مدى ملاءمة الصندوق لك.", horizon: "كم من الوقت يمكنك ترك هذا الاستثمار دون استخدام؟", horizonShort: "أقل من 3 سنوات", horizonMedium: "3 إلى 5 سنوات", horizonLong: "أكثر من 5 سنوات", lossQuestion: "إذا انخفض استثمارك 20% خلال سنة، ماذا يُرجح أن تفعل؟", lossSell: "أبيع معظمه", lossWait: "أنتظر وأراجع", lossStay: "أبقى مستثمراً", liquidityQuestion: "هل قد تحتاج هذا المال لنفقات أساسية خلال السنوات الثلاث القادمة؟", liquidityYes: "نعم، على الأرجح", liquidityNo: "لا، على الأرجح", amountPlan: "مبلغ شهري محتمل · دينار بحريني", riskAck: "أفهم أن هذا مفهوم استثمار في الأسهم متقلب وقد تنخفض قيمته ولا يضمن إتاحة الأموال عند الطلب أو حماية رأس المال.", saveProfile: "حفظ الملف التدريبي", profileSaved: "تم حفظ الملف التدريبي في هذا المتصفح", profileSavedBody: "هذا ليس تقييماً للملاءمة أو توصية استثمارية أو موافقة على الاستثمار.", noIdentity: "لا تُطلب بيانات الهوية", proposedMandate: "التفويض المقترح", proposedMandateBody: "مفهوم صندوق مقوم بالدينار البحريني ويصدر وحدات، مع محفظة متنوعة من أسهم أمريكية تخضع لفحص مباشر عبر مزودي خدمات مرخصين مقترحين. يملك العميل وحدات قابلة للاسترداد.", feesTitle: "الرسوم وشروط التداول", feesBody: "لم تُحدد الرسوم أو الشروط النهائية للإدارة والحفظ والإدارة التنفيذية والتنفيذ والصرف والتداول والاسترداد. افتراضات المعاينة أمثلة فقط، ولا تزال عروض المزودين مطلوبة.", approvalTitle: "الموافقات ومزودو الخدمات", approvalBody: "لم تثبت موافقة بنك البحرين الإسلامي أو مصرف البحرين المركزي أو الهيئة الشرعية أو المشغل أو أمين الحفظ أو أي مزود. لا يزال هيكل الصندوق والعقود واللوائح ومزودو الخدمة مقترحات.", riskDisclosure: "إفصاح المخاطر", riskBody: "يمكن أن تحدث خسائر في الأسهم والعملات. يخضع الاسترداد لمواعيد الإقفال والتسعير والتسوية المقترحة وغير النهائية. السيولة غير مضمونة.", suitabilityDisclosure: "الملاءمة والمشورة", suitabilityBody: "هذا النموذج ليس مشورة استثمارية ولا يجمع الهوية أو ينفذ إجراءات اعرف عميلك أو مكافحة غسل الأموال أو تقييم الملاءمة الإنتاجي.", screeningDisclosure: "الفحص والتغييرات المتأخرة", screeningDisclosureBody: "يعتمد الفحص على إفصاحات الشركات والبيانات المتاحة. لا يمكن معرفة التغييرات غير المفصح عنها فوراً وقد تؤثر التصحيحات اللاحقة في الموجودات والدخل والتخصيصات السابقة.",
      scenarioTitle: "حالة إرشادية لتصحيح بيانات مالية", scenarioBody: "نفّذ حالة تجريبية واحدة تبدأ بتصحيح متأخر لبيانات جهة إصدار، ثم إيقاف التخصيص وإعادة احتساب الدخل المتأثر وإضافة سجل تحويل خيري مجمع. جميع المراحل والموافقات محاكاة.", runScenario: "تشغيل حالة التصحيح", scenarioDone: "تم تسجيل الحالة التجريبية", scenarioAlreadyDone: "تم تسجيل الحالة سابقاً", scenarioRecords: "السجلات الأصلية والمصححة", originalRecord: "البيانات المنشورة الأصلية", correctedRecord: "بيانات تجريبية مصححة", reportedRatio: "النسبة المنشورة", revisedRatio: "النسبة بعد التصحيح", sampleLimit: "الحد التجريبي التوضيحي", sampleRecordDate: "تواريخ السجل · توضيحية", publishedDate: "تاريخ النشر", discoveredDate: "استلام التصحيح", thresholdNote: "حد تجريبي فقط · ليس حداً شرعياً معتمداً", stopAllocation: "إيقاف التخصيصات الجديدة للموجود التجريبي إلى حين المراجعة المقترحة", incomeRebuilt: "إعادة احتساب الدخل التجريبي المتأثر", charityTransferRecorded: "إضافة سجل تحويل مجمع", scenarioTrace: "مسار تدقيق الحالة", scenarioLink: "السجل المرتبط", correctionId: "معرف التصحيح", sampleApproval: "سجل موافقة محاكى", proposedReview: "بانتظار مراجعة الحوكمة المقترحة",
      ledgerTitle: "سجل التطهير", ledgerDesc: "إسناد توضيحي لتوزيعات الأرباح وإصدارات عوامل الحساب وتحويل خيري مجمع.", ledgerStatus: "حالة السجل التجريبية", attribution: "تخصيص العميل", pooledAmount: "مبلغ الصندوق المجمع", factorSource: "مصدر العامل / الإصدار", period: "فترة الدخل", calculation: "الاحتساب", receiptTitle: "إيصال تحويل خيري مجمع", receiptBody: "يسجل هذا الإيصال التجريبي تحويلاً من الصندوق المقترح عن المبلغ المجمع الموضح. المبلغ المخصص لحسابك قيد مطابقة فقط؛ وليس تحويلاً مصرفياً منفصلاً للعميل أو إيصالاً فردياً.", downloadPoolReceipt: "تنزيل إيصال التحويل المجمع", noIndividualReceipt: "لا يوجد إيصال فردي لمبلغ العميل المخصص", pending: "معلق · تجريبي", calculated: "تم الاحتساب · تجريبي", remitted: "تم التحويل · تجريبي", dividendAttribution: "إسناد توزيع أرباح", correctionAttribution: "تصحيح دخل بسبب إعادة البيانات", pooledTransfer: "تحويل خيري مجمع", noLedger: "لا توجد قيود في السجل", noLedgerBody: "ستظهر قيود التطهير التجريبية هنا.",
      redemptionMode: "مبلغ الاسترداد", partial: "وحدات جزئية", full: "جميع الوحدات المتاحة", unitsToRedeem: "الوحدات المطلوب استردادها", estimatedProceeds: "المتحصلات المقدرة", estimatedPnl: "الربح / الخسارة التوضيحية مقابل تكلفة العينة", possibleLoss: "قد تقل قيمة الاسترداد عن المبلغ المستثمر. هذا تقدير وليس عرضاً، وقد يتغير صافي قيمة الوحدة قبل التسعير.", redeemCutoff: "موعد طلب الاسترداد التوضيحي", redemptionStages: "مراحل الاسترداد", redemptionHistory: "طلبات الاسترداد", createRedemption: "إرسال طلب محاكاة", redeemReceived: "مستلم", redeemPriced: "تم التسعير", redeemSettled: "تمت التسوية", redeemCredited: "تم القيد", advanceRedemption: "تقديم المرحلة التجريبية", noRedemptions: "لا توجد طلبات استرداد بعد", noRedemptionsBody: "سيظهر الطلب المحاكى هنا وفي النشاط.", reserved: "محجوز للطلبات المفتوحة", redemptionTerms: "المدة والسيولة", redemptionTermsBody: "الموعد والتسعير وجدول التسوية المقترح غير نهائي. يوضح العرض مراحل فقط؛ ولا توجد إتاحة فورية أو تحويل فعلي أو حماية لرأس المال.",
      allActivity: "كل النشاط", ordersFilter: "الطلبات", shariaFilter: "السجلات الشرعية", docsTitle: "مستندات تجريبية", docsDesc: "تتضمن التنزيلات سجلات اصطناعية للعرض وليست كشوفاً رسمية أو إيصالات مصرفية.", downloadStatement: "تنزيل كشف تجريبي", activityEmpty: "لا يوجد نشاط بعد", activityEmptyBody: "سيتم تسجيل إجراءاتك المحاكية هنا.", today: "اليوم", eventScreening: "اكتمل الفحص التجريبي", eventDividend: "تم احتساب إسناد أرباح تجريبي", eventPooled: "تم تسجيل تحويل تجريبي مجمع", eventSubscription: "تمت تسوية اشتراك تجريبي", eventProfile: "تم حفظ الملف التدريبي", eventScenarioRestatement: "استلام بيانات مصدر مصححة", eventScenarioBlock: "تسجيل إيقاف التخصيص", eventScenarioIncome: "إعادة احتساب الدخل المتأثر", eventScenarioTransfer: "تسجيل تحويل خيري مجمع", eventOrderReceived: "استلام طلب اشتراك", eventOrderPriced: "تسعير طلب الاشتراك", eventOrderSettled: "تسوية طلب الاشتراك", eventRecurringCreated: "إنشاء تعليمات دورية", eventRecurringPaused: "إيقاف التعليمات الدورية مؤقتاً", eventRecurringResumed: "استئناف التعليمات الدورية", eventRecurringCancelled: "إلغاء التعليمات الدورية", eventRedemptionReceived: "استلام طلب الاسترداد", eventRedemptionPriced: "تسعير طلب الاسترداد", eventRedemptionSettled: "تسوية طلب الاسترداد", eventRedemptionCredited: "قيد متحصلات استرداد محاكاة", activityDetails: "سجل نشاط تجريبي", eventNoAmount: "لا توجد حركة نقدية · عرض يعمل في المتصفح فقط", nextStage: "المرحلة التجريبية التالية", download: "تنزيل", downloadDone: "تم تنزيل الملف التجريبي", receiptNotPersonal: "سجل للصندوق المجمع فقط · لا يصدر إيصال فردي للعميل.",
      localeTitle: "لغة العرض", localeBody: "يستخدم العرض العربي تخطيطاً من اليمين إلى اليسار. النصوص القانونية والمنتج ترجمة تجريبية فقط.", resetTitle: "إعادة ضبط العرض", resetBody: "هل تريد استعادة الحساب التجريبي الأصلي وحذف الإجراءات المحاكية المخزنة في هذا المتصفح؟", resetDemo: "إعادة ضبط العرض", resetConfirm: "هل تريد إعادة ضبط بيانات أمانة المحلية؟", resetDone: "تمت استعادة حالة العرض التجريبية الأصلية.", localStorageTitle: "التخزين التجريبي المحلي", localStorageBody: "لا يُخزّن في هذا المتصفح سوى بيانات العرض الاصطناعية واللغة المختارة. لا نجمع بيانات حساب أو هوية أو بنك.", preferencesCaution: "استخدم إعادة الضبط إذا أردت مسح النشاط التجريبي من هذا المتصفح.", close: "إغلاق", cancelAction: "إلغاء", confirm: "تأكيد", statusLabel: "الحالة", dateLabel: "التاريخ", amountLabel: "المبلغ", sourceLabel: "المصدر", versionLabel: "الإصدار", actionsLabel: "الإجراءات", detailLabel: "التفاصيل", demoOnly: "للعرض فقط", navBack: "رجوع", footerLine: "عرض مفهوم أمانة الولايات المتحدة · بيانات اصطناعية محلية فقط", basedOn: "أرقام توضيحية افتراضية", amountError: "أدخل مبلغاً صحيحاً لا يقل عن 25 ديناراً في مسار العينة هذا.", unitsError: "أدخل عدداً صحيحاً من الوحدات ضمن رصيدك المتاح.", acknowledgeError: "يرجى تأكيد إقرار المخاطر التجريبي للمتابعة.", saved: "تم الحفظ في هذا المتصفح", stepReceived: "مستلم", stepPriced: "تم التسعير", stepSettled: "تمت التسوية", stepCredited: "تم القيد", currencyCode: "BHD", localeArabic: "العربية", localeEnglish: "English", langEnglishShort: "EN", langArabicShort: "عربي", record: "السجل", costBasis: "متوسط تكلفة العينة", profileState: "حالة الملف التدريبي", runAgain: "تم تشغيل الحالة", payout: "تحديث سجل النقد المحاكى", valueAfter: "القيمة التوضيحية بعد الطلب", valueBefore: "القيمة التوضيحية قبل الطلب", dataCutoff: "آخر تاريخ بيانات نموذجي", notLive: "غير مباشر", accountActivity: "نشاط الحساب", pooledReceiptId: "مرجع إيصال مجمع", reviewStatus: "حالة المراجعة التجريبية", notFinal: "غير نهائي", dueDate: "التاريخ المفترض", noIdentityNote: "لا نطلب اسمك أو رقم الهوية أو الحساب أو بيانات الدخول المصرفية.", financialDataWarning: "الأرقام وسجل الأداء وصافي قيمة الوحدة ومدخلات الصرف والرسوم والتواريخ والموجودات وحالاتها بيانات اصطناعية للعرض.", emptyHint: "اختر قسماً من القائمة لاستكشاف الرحلة المحاكية.", refreshNote: "حفظ بيانات العرض بعد التحديث", openSettings: "فتح التفضيلات", showDisclosures: "قراءة الإفصاحات", startScenario: "استكشاف الحالة", allValues: "جميع القيم المعروضة تجريبية"
    }
  };

  const FEATURE_WORDS = {
    en: {
      explore: "Explore investments", compare: "Compare", giving: "Zakat & giving", market: "Market & FX",
      compareDesc: "Compare sample growth, fees and risk for all three profiles and other options.", moreDesc: "Open tools, records and settings.", marketDesc: "See the sample currency input and market data cutoff used in this demo.", open: "Open",
      homeCompareTitle: "Compare sample returns", homeCompareNote: "Same 12-month period · sample figures only", selectedProfile: "Chosen profile", sampleGainLoss: "Sample gain / loss", profileReturns: "Amanah profile examples", compareHomeAction: "See full comparison", contribute: "Contribute",
      exploreDesc: "Browse sample investments by business area. These entries are demo examples, not live approvals.",
      compareDesc: "Review sample portfolio gains, losses, fees and risk beside other illustrative options.",
      givingDesc: "Estimate Zakat for learning and set a separate optional charity percentage for positive realised profit.",
      interests: "Choose an area of interest", allInterests: "All areas", technology: "Technology", healthcare: "Healthcare", consumer: "Consumer goods", cleanEnergy: "Clean energy", demoCleared: "Demo screen: pass", noApprovals: "No investment here is live or approved. Issuers and screen results are fictional sample data.", exploreDetail: "Each card shows a sample business area and a screening record. A real service would need agreed standards, data and Sharia governance.",
      riskProfile: "Choose your risk approach", cautious: "Cautious", balanced: "Balanced", growth: "Growth", cautiousCopy: "Lower sample equity weight; losses are still possible.", balancedCopy: "Middle sample equity weight; losses are still possible.", growthCopy: "Higher sample equity weight; larger losses are possible.", selected: "Selected for this demo", riskSaved: "Risk approach saved in this browser.",
      performanceNow: "Your sample performance", unrealized: "Unrealised gain / loss", realizedGain: "Realised gains", realizedLoss: "Realised losses", netSample: "Net sample gain / loss", returnCompare: "Illustrative 12-month comparison", amanahSample: "Amanah concept", sp500Sample: "S&P 500 example", savingsExample: "Cash savings example", shariaFundExample: "Sharia equity fund example", sampleReturn: "Sample return", sampleAnnualFee: "Sample annual fee", riskLevel: "Example risk", comparisonDisclaimer: "The 0.85% Amanah annual fee shown for each profile is a sample assumption for comparison only. Final proposed Amanah fees are not set, and this is not a BISB fee quote. All returns, fees and risk labels are made-up teaching examples, not historical performance or a forecast. Options differ in currency, holdings, liquidity and provider terms.", high: "Higher", medium: "Medium", lower: "Lower", feeNotSet: "Not set", performanceFromLedger: "Account gains and losses below are calculated from this browser's synthetic units, sample NAV and simulated redemptions.",
      zakatTitle: "Zakat estimate", zakatIntro: "Enter example values to see an illustrative estimate. This does not decide your Zakat obligation.", cash: "Cash", bankBalances: "Bank balances", investments: "Investments and funds", gold: "Gold", silver: "Silver", otherAssets: "Other eligible assets", liabilities: "Eligible short-term liabilities", nisabChoice: "Nisab reference", goldOption: "Gold", silverOption: "Silver", goldThreshold: "Gold threshold · sample BHD", silverThreshold: "Silver threshold · sample BHD", lunarYear: "Assets held for one lunar year", calculate: "Update estimate", zakatDue: "Illustrative estimate at 2.5%", zakatBelow: "Sample total is below the selected threshold", netAssets: "Example net assets", selectedThreshold: "Selected sample threshold", zakatMethodNote: "This simple estimate uses the amounts entered, subtracts listed liabilities, and applies 2.5% only when the lunar-year box is checked and the total reaches your chosen threshold. Asset treatment and methods can differ. Ask a qualified scholar for guidance. This is not a fatwa or payment service.", nisabNote: "The gold and silver thresholds are editable sample values only. Live nisab values change with metal prices; no current value is supplied here.", referenceLinks: "Official and reference calculators", bahrainServices: "Bahrain Zakat services", bisbCalculator: "BisB Zakat calculator", kaafCalculator: "Kaaf calculator · nisab reference", voluntaryTitle: "Optional profit charity", voluntaryDesc: "Choose a percentage of positive realised sample profit. This is a voluntary preference and is separate from required purification.", profitPercentage: "Percentage of positive realised profit", eligibleProfit: "Positive realised profit in this demo", optionalAmount: "Illustrative optional charity amount", saveGiving: "Save preference", givingSaved: "Charity preference saved in this browser.", givingNoProfit: "There is no positive realised profit in the current sample ledger, so the estimate is BHD 0.000.", givingSeparation: "This optional charity estimate does not change purification records. Required purification follows a separate sample ledger and pooled-transfer receipt. No payment or donation is made.",
      eventRiskChoice: "Risk approach changed", eventGivingChoice: "Optional charity preference changed",
      eventScenarioReviewOutcome: "Sample review outcome recorded", eventScenarioDisposal: "Simulated disposal step recorded", eventScenarioTransfer: "Simulated pooled transfer record added", scenarioOutcomeDetail: "ASMC · review remains pending under proposed governance.", scenarioDisposalDetail: "ASMC · simulated disposal step recorded; no actual trade occurred.", seedScreeningDetail: "sample review completed", seedDividendDetail: "allocation pending", seedRedemptionDetail: "credited in the sample cash ledger", scenarioIncomeDetail: "reconstructed sample income", scenarioTransferDetail: "simulated pooled transfer record", noActualTransfer: "No actual charity transfer took place in this demo. This is a simulated record only.", receiptBody: "This sample card illustrates a pooled transfer record for the proposed fund. No actual transfer occurred in this demo. Your allocated amount is only a reconciliation entry, not a separate customer bank transfer or individual receipt.", scenarioBody: "Run one sample incident from late issuer data through an allocation pause, review outcome, simulated disposal, affected-income reconstruction and a pooled transfer record. No real issuer or trade is involved; every stage and approval shown is simulated.",
      detailRequested: "Requested amount", detailEstimatedUnits: "estimated", detailSampleNav: "sample NAV", detailUnitsAdded: "added to the demo ledger", detailUnitsRequested: "requested", detailAtSampleNav: "at sample NAV", detailUnitsSettled: "settled in the demo ledger", detailNoBankTransfer: "demo cash ledger updated · no bank transfer",
      unitsShort: "units", monthly: "Monthly", monthJul: "JUL", monthAug: "AUG", monthSep: "SEP", monthOct: "OCT", marketWindow: "U.S. market window", marketClosed: "Closed · sample view", sampleAssumptions: "All are sample assumptions.", option: "Option"
    },
    ar: {
      explore: "استكشف الاستثمارات", compare: "مقارنة", giving: "الزكاة والعطاء", market: "السوق والعملات",
      compareDesc: "قارن النمو والرسوم والمخاطر التجريبية للملفات الثلاثة وخيارات أخرى.", moreDesc: "افتح الأدوات والسجلات والإعدادات.", marketDesc: "اطلع على سعر الصرف التجريبي وتاريخ بيانات السوق في هذا العرض.", open: "افتح",
      homeCompareTitle: "مقارنة العوائد التجريبية", homeCompareNote: "الفترة نفسها: 12 شهراً · أرقام تجريبية فقط", selectedProfile: "الملف المختار", sampleGainLoss: "مكسب / خسارة تجريبية", profileReturns: "أمثلة لملفات أمانة", compareHomeAction: "عرض المقارنة الكاملة", contribute: "ساهم",
      exploreDesc: "تصفّح استثمارات تجريبية حسب مجال النشاط. هذه أمثلة للعرض وليست موافقات فعلية.",
      compareDesc: "راجع المكاسب والخسائر والرسوم والمخاطر التجريبية بجانب خيارات توضيحية أخرى.",
      givingDesc: "قدّر الزكاة لغرض التعلّم وحدد نسبة خيرية اختيارية منفصلة من الربح المحقق الإيجابي.",
      interests: "اختر مجال اهتمام", allInterests: "كل المجالات", technology: "التقنية", healthcare: "الرعاية الصحية", consumer: "السلع الاستهلاكية", cleanEnergy: "الطاقة النظيفة", demoCleared: "نتيجة الفحص التجريبي: اجتاز", noApprovals: "لا يوجد هنا استثمار فعلي أو معتمد. الجهات المصدرة ونتائج الفحص أمثلة خيالية.", exploreDetail: "توضح كل بطاقة مجال النشاط وسجل فحص تجريبي. تتطلب الخدمة الفعلية معايير وبيانات وحوكمة شرعية متفقاً عليها.",
      riskProfile: "اختر مستوى المخاطر", cautious: "حذر", balanced: "متوازن", growth: "نمو", cautiousCopy: "وزن أسهم تجريبي أقل؛ وتظل الخسائر ممكنة.", balancedCopy: "وزن أسهم تجريبي متوسط؛ وتظل الخسائر ممكنة.", growthCopy: "وزن أسهم تجريبي أعلى؛ وقد تكون الخسائر أكبر.", selected: "المحدد في هذا العرض", riskSaved: "تم حفظ مستوى المخاطر في هذا المتصفح.",
      performanceNow: "أداء حسابك التجريبي", unrealized: "مكسب / خسارة غير محققة", realizedGain: "المكاسب المحققة", realizedLoss: "الخسائر المحققة", netSample: "صافي مكسب / خسارة العينة", returnCompare: "مقارنة توضيحية لمدة 12 شهراً", amanahSample: "مفهوم أمانة", sp500Sample: "مثال مؤشر S&P 500", savingsExample: "مثال مدخرات نقدية", shariaFundExample: "مثال صندوق أسهم متوافق", sampleReturn: "عائد تجريبي", sampleAnnualFee: "رسوم سنوية تجريبية", riskLevel: "مستوى المخاطر التوضيحي", comparisonDisclaimer: "رسم أمانة السنوي بنسبة 0.85٪ المعروض لكل ملف هو افتراض تجريبي للمقارنة فقط. لم تُحدد رسوم أمانة المقترحة النهائية، وهذا ليس عرض رسوم من بنك البحرين الإسلامي. جميع العوائد والرسوم وتصنيفات المخاطر أمثلة تعليمية افتراضية، وليست أداءً تاريخياً أو توقعاً. تختلف الخيارات في العملة والموجودات والسيولة وشروط المزودين.", high: "أعلى", medium: "متوسط", lower: "أقل", feeNotSet: "غير محددة", performanceFromLedger: "تُحتسب مكاسب وخسائر الحساب أدناه من الوحدات وصافي قيمة الوحدة التجريبيين وطلبات الاسترداد المحاكية في هذا المتصفح.",
      zakatTitle: "تقدير الزكاة", zakatIntro: "أدخل قيماً افتراضية للاطلاع على تقدير توضيحي. لا يحدد ذلك وجوب الزكاة عليك.", cash: "النقد", bankBalances: "الأرصدة المصرفية", investments: "الاستثمارات والصناديق", gold: "الذهب", silver: "الفضة", otherAssets: "موجودات أخرى مؤهلة", liabilities: "الالتزامات القصيرة المؤهلة", nisabChoice: "مرجع النصاب", goldOption: "الذهب", silverOption: "الفضة", goldThreshold: "حد الذهب · دينار بحريني تجريبي", silverThreshold: "حد الفضة · دينار بحريني تجريبي", lunarYear: "مرور سنة قمرية على الموجودات", calculate: "تحديث التقدير", zakatDue: "التقدير التوضيحي بنسبة 2.5٪", zakatBelow: "إجمالي العينة أقل من النصاب المحدد", netAssets: "صافي الموجودات الافتراضي", selectedThreshold: "النصاب التجريبي المختار", zakatMethodNote: "يستخدم هذا التقدير المبسط المبالغ المدخلة ويطرح الالتزامات المدرجة ويطبق 2.5٪ فقط عند تحديد مرور السنة القمرية وبلوغ الإجمالي النصاب المختار. قد تختلف معاملة الموجودات والمنهجيات. استشر عالماً مؤهلاً. هذا ليس فتوى أو خدمة دفع.", nisabNote: "حدا الذهب والفضة قيمتان تجريبيتان قابلتان للتعديل فقط. تتغير قيم النصاب الفعلية مع أسعار المعادن؛ ولا نعرض قيمة حالية هنا.", referenceLinks: "حاسبات رسمية ومرجعية", bahrainServices: "خدمات الزكاة في البحرين", bisbCalculator: "حاسبة الزكاة من بنك البحرين الإسلامي", kaafCalculator: "حاسبة كاف · مرجع النصاب", voluntaryTitle: "صدقة اختيارية من الربح", voluntaryDesc: "اختر نسبة من الربح التجريبي المحقق الإيجابي. هذا تفضيل اختياري ومنفصل عن التطهير الواجب.", profitPercentage: "النسبة من الربح المحقق الإيجابي", eligibleProfit: "الربح المحقق الإيجابي في هذا العرض", optionalAmount: "مبلغ الصدقة الاختيارية التوضيحي", saveGiving: "حفظ التفضيل", givingSaved: "تم حفظ تفضيل الصدقة في هذا المتصفح.", givingNoProfit: "لا يوجد ربح محقق إيجابي في سجل العينة الحالي، لذا يساوي التقدير 0.000 دينار بحريني.", givingSeparation: "لا يغيّر تقدير الصدقة الاختيارية سجلات التطهير. يسجل التطهير الواجب في سجل تجريبي منفصل مع إيصال تحويل مجمع. لا يحدث دفع أو تبرع فعلي.",
      eventRiskChoice: "تغيير مستوى المخاطر", eventGivingChoice: "تغيير تفضيل الصدقة الاختيارية",
      eventScenarioReviewOutcome: "تم تسجيل نتيجة المراجعة التجريبية", eventScenarioDisposal: "تم تسجيل خطوة استبعاد محاكاة", eventScenarioTransfer: "إضافة سجل تحويل مجمع محاكى", scenarioOutcomeDetail: "ASMC · ما زالت المراجعة مطلوبة وبانتظار مراجعة الحوكمة المقترحة.", scenarioDisposalDetail: "ASMC · تم تسجيل خطوة استبعاد محاكاة؛ لم تحدث صفقة فعلية.", seedScreeningDetail: "اكتملت المراجعة التجريبية", seedDividendDetail: "التخصيص معلق", seedRedemptionDetail: "تم قيده في سجل النقد التجريبي", scenarioIncomeDetail: "دخل تجريبي أُعيد احتسابه", scenarioTransferDetail: "سجل تحويل مجمع محاكى", noActualTransfer: "لم يحدث أي تحويل خيري فعلي في هذا العرض. هذا سجل مجمع محاكى فقط.", receiptBody: "توضح هذه البطاقة التجريبية شكل سجل تحويل مجمع للصندوق المقترح. لم يحدث أي تحويل فعلي في هذا العرض. المبلغ المخصص لحسابك قيد مطابقة فقط، وليس تحويلاً مصرفياً منفصلاً أو إيصالاً فردياً.", scenarioBody: "تتبع الحالة التجريبية تصحيحاً متأخراً لبيانات جهة إصدار، وإيقاف التخصيص، وتسجيل نتيجة مراجعة، وخطوة استبعاد محاكاة، وإعادة احتساب الدخل المتأثر، وسجل تحويل مجمع. لا توجد جهة إصدار أو صفقة حقيقية؛ جميع المراحل والموافقات محاكاة.",
      detailRequested: "المبلغ المطلوب", detailEstimatedUnits: "مقدّرة", detailSampleNav: "صافي قيمة الوحدة التجريبي", detailUnitsAdded: "أضيفت إلى سجل العرض", detailUnitsRequested: "مطلوبة", detailAtSampleNav: "بسعر صافي قيمة الوحدة التجريبي", detailUnitsSettled: "تمت تسويتها في سجل العرض", detailNoBankTransfer: "تم تحديث سجل النقد التجريبي · لا يوجد تحويل مصرفي",
      unitsShort: "وحدة", monthly: "شهرياً", monthJul: "يوليو", monthAug: "أغسطس", monthSep: "سبتمبر", monthOct: "أكتوبر", marketWindow: "فترة السوق الأمريكي", marketClosed: "مغلق · عرض تجريبي", sampleAssumptions: "جميع الافتراضات تجريبية.", option: "الخيار"
    }
  };

  const holdings = [
    { ticker: "ASMC", name: "Amanah Semiconductor Co.", monogram: "AS", interest: "technology", weight: 28.4, value: 392.46, reviewDate: "2026-10-02", sourceDate: "2026-09-30", vintage: "2026 Q3 · sample feed 0.3", baseStatus: "pass" },
    { ticker: "CRHP", name: "Crescent Health Products Inc.", monogram: "CH", interest: "healthcare", weight: 24.8, value: 342.72, reviewDate: "2026-09-28", sourceDate: "2026-09-24", vintage: "2026 Q3 · sample feed 0.3", baseStatus: "pass" },
    { ticker: "NSTR", name: "Northstar Systems Group", monogram: "NS", interest: "cleanEnergy", weight: 25.1, value: 346.87, reviewDate: "2026-09-25", sourceDate: "2026-09-20", vintage: "2026 Q3 · sample feed 0.3", baseStatus: "pass" },
    { ticker: "HARB", name: "Harbor Consumer Brands Ltd.", monogram: "HB", interest: "consumer", weight: 21.7, value: 300.48, reviewDate: "2026-09-21", sourceDate: "2026-09-18", vintage: "2026 Q3 · sample feed 0.3", baseStatus: "pass" }
  ];
  const MORE_ROUTES = new Set(["explore", "profile", "sharia", "purification", "giving", "activity", "preferences", "market"]);
  const SPUS_SECTOR_AS_OF = "2026-10-09";
  const SPUS_SECTOR_MIX = Object.freeze([
    { key: "sectorTechnology", weight: 62.59 },
    { key: "sectorHealthcare", weight: 11.51 },
    { key: "sectorIndustrials", weight: 6.23 },
    { key: "sectorConsumerDiscretionary", weight: 5.85 },
    { key: "sectorCommunication", weight: 5.11 },
    { key: "sectorEnergy", weight: 2.82 },
    { key: "sectorConsumerStaples", weight: 2.48 },
    { key: "sectorMaterials", weight: 2.38 },
    { key: "sectorRealEstate", weight: 0.72 },
    { key: "sectorUtilities", weight: 0.21 },
    { key: "sectorFinancials", weight: 0.12 }
  ]);
  const SPUS_BENCHMARK = Object.freeze({
    asOf: "2026-09-30",
    sourceUrl: "https://www.sp-funds.com/SPUS/",
    returns: [
      { label: "1M", value: 1.25 },
      { label: "3M", value: 3.65 },
      { label: "6M", value: 23.94 },
      { label: "YTD", value: 17.13 },
      { label: "1Y", value: 21.21 }
    ]
  });

  const seed = () => ({
    units: 1284.62,
    nav: NAV,
    averageCost: 1.0945,
    cashBhd: 12.350,
    scenarioRun: false,
    profile: null,
    riskMode: "balanced",
    givingPercent: 0,
    zakat: { cash: 2500, bank: 1800, investments: 3000, gold: 500, silver: 0, other: 0, liabilities: 450, nisabMethod: "gold", goldThreshold: 4200, silverThreshold: 430, lunarYear: true },
    recurring: [{ id: "REC-SAMPLE-014", amount: 25, frequency: "Monthly", status: "active", nextDate: "2026-11-02", createdAt: "2026-09-10T09:00:00.000Z" }],
    orders: [{ id: "BUY-SAMPLE-018", amount: 50, costRate: 0, units: 46.554935, nav: 1.0740, stage: 2, createdAt: "2026-09-29T09:30:00.000Z", seeded: true }],
    redemptions: [{ id: "RED-SAMPLE-008", units: 20, nav: 1.20, proceeds: 24, pnl: 2.11, stage: 3, createdAt: "2026-09-15T10:00:00.000Z", mode: "partial", seeded: true }],
    purification: [
      { id: "PUR-SAMPLE-031", kind: "dividend", period: "2026 Q3", customerAmount: 0.013, poolAmount: 36.420, factor: "Sample dividend factor pack v0.4", status: "pending", date: "2026-10-05" },
      { id: "PUR-SAMPLE-028", kind: "dividend", period: "2026 Q2", customerAmount: 0.008, poolAmount: 24.880, factor: "Sample dividend factor pack v0.3", status: "calculated", date: "2026-08-18" },
      { id: "PUR-SAMPLE-019", kind: "transfer", period: "2026 Q1", customerAmount: 0.004, poolAmount: 84.620, factor: "Sample factor set v0.2", status: "remitted", date: "2026-04-20", receipt: "DEMO-POOL-019" }
    ],
    charityTransfers: [{ id: "POOL-SAMPLE-019", receipt: "DEMO-POOL-019", amount: 84.620, customerAllocation: 0.004, date: "2026-04-20", status: "remitted" }],
    events: [
      { id: "EV-018", key: "eventSubscription", detail: "BHD 50.000 · 46.37 sample units", type: "order", amount: 50, date: "2026-09-29T09:30:00.000Z" },
      { id: "EV-014", key: "eventScreening", detail: "ASMC · sample review completed", type: "sharia", date: "2026-10-02T08:00:00.000Z" },
      { id: "EV-013", key: "eventDividend", detail: "2026 Q3 · allocation pending", type: "purification", amount: 0.013, date: "2026-10-05T08:00:00.000Z" },
      { id: "EV-008", key: "eventRedemptionCredited", detail: "RED-SAMPLE-008 · BHD 24.000 credited in sample cash ledger", type: "redemption", amount: 24, date: "2026-09-15T10:00:00.000Z" }
    ]
  });

  let locale = localStorage.getItem(LOCALE_KEY) === "ar" ? "ar" : "en";
  let feedbackEnabled = localStorage.getItem(FEEDBACK_KEY) !== "off";
  let feedbackAudio = null;
  let state = loadState();
  let route = "overview";
  let investMode = "once";
  let redeemMode = "partial";
  let activityFilter = "all";
  let exploreFilter = "all";
  let comparePeriod = "1Y";
  let modalReturnFocus = null;
  const app = document.getElementById("app");
  const modalRoot = document.getElementById("modal-root");
  const toastRoot = document.getElementById("toast-root");

  function loadState() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (value && typeof value.units === "number" && Array.isArray(value.events)) {
        const defaults = seed();
        return { ...defaults, ...value, orders: Array.isArray(value.orders) ? value.orders.map((order) => order.seeded ? { ...order, costRate: 0 } : order) : defaults.orders, zakat: { ...defaults.zakat, ...(value.zakat || {}) }, riskMode: value.riskMode || defaults.riskMode, givingPercent: Number(value.givingPercent) || 0 };
      }
    } catch (_) { /* a damaged demo record falls back to a fresh synthetic account */ }
    return seed();
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  const BRAND_COPY = {
    en: {
      amanahTitle: "Amanah",
      overviewEyebrow: "BISB MOBILE",
      accountLabel: "Amanah account",
      sampleGainLoss: "Gain / loss",
      portfolioTrend: "SPUS sector allocation",
      sampleSeries: "SPUS sector weights · 9 Oct 2026",
      sectorTechnology: "Information Technology",
      sectorFinancials: "Financials",
      sectorCommunication: "Communication Services",
      sectorHealthcare: "Health Care",
      sectorConsumerDiscretionary: "Consumer Discretionary",
      sectorIndustrials: "Industrials",
      sectorConsumerStaples: "Consumer Staples",
      sectorEnergy: "Energy",
      sectorUtilities: "Utilities",
      sectorMaterials: "Materials",
      sectorRealEstate: "Real Estate",
      moreDesc: "Explore investments, Zakat and account records.",
      moreNoteTitle: "About Amanah",
      moreNoteBody: "Values, returns, fees and screening details are illustrative.",
      exploreDesc: "Explore SPUS sectors and their estimated BHD allocation.",
      profileDesc: "Review how Amanah invests and the key investment details.",
      shariaDesc: "Review screening decisions, compliance changes and actions.",
      purificationDesc: "Review required purification and its record.",
      givingDesc: "Set an optional charity percentage for positive realised profit.",
      activityDesc: "View contributions, portfolio updates and records.",
      preferencesDesc: "Change display language and app preferences.",
      marketDesc: "Review market and currency context.",
      marketNote: "U.S. equity prices and USD/BHD conversion can both affect your portfolio value. The example FX reference is not a live quote.",
      compareDesc: "Amanah vs SPUS",
      homeCompareTitle: "SPUS returns",
      homeCompareNote: "SP Funds · 30 Sep 2026",
      performanceNow: "Your Amanah account",
      netSample: "Account gain / loss",
      returnCompare: "SPUS NAV returns",
      benchmarkReturnLabel: "Published NAV return",
      benchmarkAsOf: "As of",
      benchmarkScale: "Scale",
      benchmarkSource: "Source: SP Funds",
      spusMetricNote: "NAV return · USD",
      comparePeriodHint: "Choose a timeframe",
      accountValueLabel: "Amanah value",
      accountChartLabel: "Amanah account gain or loss in BHD",
      accountBreakdownLabel: "Gain or loss breakdown",
      spusPeriodsLabel: "SPUS returns by period",
      spusOneYearLabel: "1 year",
      viewAllSectors: "View all 11 sectors",
      allocationEstimateNote: "BHD amounts are estimated by applying SPUS’s published sector weights to your Amanah investment value. They are not live account holdings.",
      amanahSample: "Amanah",
      sp500Sample: "SPUS",
      savingsExample: "Cash savings",
      shariaFundExample: "Sharia equity fund",
      sampleReturn: "12-month return",
      sampleAnnualFee: "Annual fee",
      riskLevel: "Risk",
      comparisonDisclaimer: "SPUS: historical NAV return in USD, not a forecast. Amanah: your BHD account result.",
      performanceFromLedger: "Gain or loss based on recorded account activity.",
      realizedNet: "Realised net",
      selected: "Selected",
      overviewDesc: "See your Amanah value, SPUS allocation and account performance.",
      redeemUnits: "Redeem",
      partial: "Choose amount",
      full: "All available",
      fundHoldings: "Investments",
      unitBalance: "Portfolio balance",
      unitNav: "Investment price",
      lossBody: "Your portfolio value can fall and you may get back less than you invested. Currency movements, dealing cutoffs and settlement timing can affect outcomes. No return, liquidity or principal is guaranteed.",
      proposedMandateBody: "A BHD-denominated managed portfolio holding a diversified mix of screened U.S. shares. Investments are held through proposed licensed service providers.",
      riskBody: "Equity and currency losses are possible. A redemption would follow proposed cutoffs and settlement terms, which are not finalized. Liquidity is not guaranteed.",
      estimatedUnits: "Estimated amount invested",
      portfolioDesc: "See the estimated split of your Amanah value across SPUS sectors.",
      investDesc: "Make a one-time contribution or set a monthly contribution.",
      redeemDesc: "Review a partial or full redemption and its estimated value.",
      preferencesDesc: "Change display language and account preferences.",
      feedbackTitle: "Touch feedback",
      feedbackBody: "Use a subtle sound or vibration after successful actions.",
      feedbackOn: "On",
      feedbackOff: "Off",
      simulatedCash: "Cash balance",
      unitNav: "Investment price",
      unitsNote: "Units held in your Amanah account",
      navNote: "Current dealing price",
      returnNote: "Past performance does not guarantee future results",
      cashNote: "Available cash",
      basedOn: "Portfolio records",
      availableCash: "Available cash",
      portfolioMix: "Portfolio mix",
      investedValue: "Estimated amount invested",
      estimatedGainLoss: "Estimated gain / loss",
      redemptionAmount: "Amount to redeem",
      availableToRedeem: "Available to redeem",
      redemptionEstimate: "Redemption estimate",
      redemptionAmountError: "Enter an amount within your available portfolio value.",
      comparisonBase: "Starting with BHD 1,000",
      afterTwelveMonths: "Estimated value after 12 months",
      fundHoldingsDesc: "BHD amounts apply SPUS’s published sector weights to your current Amanah investment value.",
      screenStatus: "Sharia screening status",
      demoIssuer: "U.S. equity",
      noLiveData: "Each investment includes its screening status and review date.",
      fundOwns: "Amanah is a managed portfolio of screened investments.",
      invest: "Invest",
      contribution: "Contribution",
      subscriptionDetail: "Contribution",
      createSubscription: "Continue contribution",
      createInstruction: "Monthly contribution",
      orderHistory: "Contribution history",
      noOrdersBody: "Your contributions will appear here.",
      noPayment: "Review your amount and investment terms before continuing.",
      minGuide: "Minimum contribution: BHD 25.",
      nextDealing: "Next dealing date",
      cutoffValue: "Cut-off 11:00 Bahrain time",
      navAssumption: "Estimated investment price",
      costAssumption: "Transaction fee",
      costAssumptionValue: "Not set",
      fxAssumption: "USD/BHD reference rate",
      fxValue: "0.376",
      sampleAssumptions: "Rates are indicative.",
      recurringHelp: "Choose an amount to contribute each month. You can pause or cancel later.",
      nextRun: "Next contribution date",
      refreshNote: "Changes saved automatically.",
      stageComplete: "",
      advanceOrder: "Continue order",
      orderId: "Order ID",
      active: "Active",
      paused: "Paused",
      cancelled: "Cancelled",
      resetTitle: "Reset Amanah data",
      resetBody: "Restore the original account values and clear activity saved on this device?",
      resetDemo: "Reset data",
      resetConfirm: "Reset Amanah data on this device?",
      resetDone: "Amanah data reset.",
      localStorageTitle: "Data on this device",
      localStorageBody: "Your language and app activity are saved on this device. Identity and bank details are not collected.",
      preferencesCaution: "This clears Amanah activity saved on this device.",
      sample: "",
      concept: "AMANAH",
      demoNoticeTitle: "Amanah",
      demoNoticeBody: "Values, returns, fees and screening details are illustrative.",
      demoOnly: "Illustrative",
      footerLine: "Amanah · BISB Mobile",
      financialDataWarning: "Portfolio values and comparisons are illustrative.",
      allValues: "Values and comparisons are illustrative.",
      dealingDate: "Dealing date",
      currentSampleStatus: "Current screening status",
      holding: "Investment",
      screened: "Screened",
      underReview: "Under review",
      screenMethod: "Sharia screening method",
      screenMethodBody: "Screening criteria, thresholds and data sources are reviewed as company information changes.",
      statusDisclaimer: "Screening status reflects available company information and is not a Sharia ruling.",
      noApprovals: "Screening decisions depend on available company disclosures and can change after review.",
      exploreDetail: "Each investment shows its business area and latest screening record.",
      zakatIntro: "Enter your eligible assets and liabilities to estimate Zakat. This does not decide your obligation.",
      goldThreshold: "Gold threshold · BHD",
      silverThreshold: "Silver threshold · BHD",
      zakatBelow: "Total is below the selected threshold",
      netAssets: "Net assets",
      selectedThreshold: "Selected threshold",
      zakatDue: "Estimated Zakat at 2.5%",
      nisabNote: "Nisab values change with metal prices. Check current values using the reference links.",
      voluntaryDesc: "Choose a percentage of positive realised profit. This is separate from required purification.",
      eligibleProfit: "Eligible realised profit",
      givingNoProfit: "There is no positive realised profit in the current portfolio, so the estimate is BHD 0.000.",
      givingSeparation: "Optional charity is separate from required purification. No payment or donation is made here."
    },
    ar: {
      amanahTitle: "أمانة",
      overviewEyebrow: "BISB MOBILE",
      accountLabel: "حساب أمانة",
      sampleGainLoss: "المكسب / الخسارة",
      portfolioTrend: "توزيع قطاعات SPUS",
      sampleSeries: "أوزان قطاعات SPUS · 9 أكتوبر 2026",
      sectorTechnology: "تقنية المعلومات",
      sectorFinancials: "الخدمات المالية",
      sectorCommunication: "خدمات الاتصالات",
      sectorHealthcare: "الرعاية الصحية",
      sectorConsumerDiscretionary: "السلع الاستهلاكية التقديرية",
      sectorIndustrials: "الصناعات",
      sectorConsumerStaples: "السلع الاستهلاكية الأساسية",
      sectorEnergy: "الطاقة",
      sectorUtilities: "المرافق العامة",
      sectorMaterials: "المواد الأساسية",
      sectorRealEstate: "العقارات",
      moreDesc: "استكشف الاستثمارات والزكاة وسجلات الحساب.",
      moreNoteTitle: "عن أمانة",
      moreNoteBody: "القيم والعوائد والرسوم وتفاصيل الفحص توضيحية.",
      exploreDesc: "استكشف قطاعات SPUS وتقدير قيمة كل قطاع بالدينار البحريني.",
      profileDesc: "راجع طريقة استثمار أمانة والتفاصيل الرئيسية.",
      shariaDesc: "راجع قرارات الفحص وتغيرات الالتزام والإجراءات.",
      purificationDesc: "راجع التطهير المطلوب وسجلاته.",
      givingDesc: "حدد نسبة اختيارية للتبرع من الأرباح المحققة الإيجابية.",
      activityDesc: "راجع المساهمات وتحديثات المحفظة والسجلات.",
      preferencesDesc: "غير لغة العرض وإعدادات التطبيق.",
      marketDesc: "راجع أوضاع السوق والعملات.",
      marketNote: "قد تؤثر أسعار الأسهم الأمريكية وتحويل الدولار إلى الدينار على قيمة محفظتك. سعر الصرف المرجعي مثال وليس سعراً مباشراً.",
      compareDesc: "أمانة مقابل SPUS",
      homeCompareTitle: "عوائد SPUS",
      homeCompareNote: "SP Funds · 30 سبتمبر 2026",
      performanceNow: "حساب أمانة",
      netSample: "مكسب / خسارة الحساب",
      returnCompare: "عوائد صافي قيمة SPUS",
      benchmarkReturnLabel: "العائد المنشور",
      benchmarkAsOf: "حتى",
      benchmarkScale: "المقياس",
      benchmarkSource: "المصدر: SP Funds",
      spusMetricNote: "عائد صافي قيمة الأصول · بالدولار",
      comparePeriodHint: "اختر فترة زمنية",
      accountValueLabel: "قيمة أمانة",
      accountChartLabel: "مكسب أو خسارة حساب أمانة بالدينار البحريني",
      accountBreakdownLabel: "تفاصيل المكسب أو الخسارة",
      spusPeriodsLabel: "عوائد SPUS حسب الفترة",
      spusOneYearLabel: "سنة واحدة",
      viewAllSectors: "عرض القطاعات الـ 11",
      allocationEstimateNote: "تُقدّر مبالغ الدينار البحريني بتطبيق أوزان قطاعات SPUS المنشورة على قيمة استثمار أمانة. هذه ليست حيازات مباشرة لحسابك.",
      amanahSample: "أمانة",
      sp500Sample: "SPUS",
      savingsExample: "الادخار النقدي",
      shariaFundExample: "صندوق أسهم متوافق مع الشريعة",
      sampleReturn: "عائد 12 شهراً",
      sampleAnnualFee: "الرسوم السنوية",
      riskLevel: "المخاطر",
      comparisonDisclaimer: "SPUS: عائد NAV تاريخي بالدولار وليس توقعاً. أمانة: نتيجة حسابك بالدينار البحريني.",
      performanceFromLedger: "المكسب أو الخسارة حسب نشاط الحساب المسجل.",
      realizedNet: "صافي المحقق",
      selected: "محدد",
      overviewDesc: "اطلع على قيمة أمانة وتوزيع SPUS وأداء الحساب.",
      redeemUnits: "استرداد",
      partial: "تحديد المبلغ",
      full: "كامل المتاح",
      fundHoldings: "الاستثمارات",
      unitBalance: "رصيد المحفظة",
      unitNav: "سعر الاستثمار",
      estimatedUnits: "المبلغ المقدر استثماره",
      portfolioDesc: "اطلع على التوزيع التقديري لقيمة أمانة حسب قطاعات SPUS.",
      fundHoldingsDesc: "تُطبّق أوزان قطاعات SPUS المنشورة على قيمة استثمار أمانة الحالية لتقدير المبالغ بالدينار.",
      investDesc: "قم بمساهمة واحدة أو حدد مساهمة شهرية.",
      redeemDesc: "راجع الاسترداد الجزئي أو الكامل وقيمته التقديرية.",
      preferencesDesc: "غير لغة العرض وتفضيلات الحساب.",
      feedbackTitle: "الاستجابة اللمسية",
      feedbackBody: "استخدم صوتاً خفيفاً أو اهتزازاً عند نجاح الإجراءات.",
      feedbackOn: "تشغيل",
      feedbackOff: "إيقاف",
      simulatedCash: "الرصيد النقدي",
      unitNav: "سعر الاستثمار",
      lossBody: "قد تنخفض قيمة محفظتك وقد تسترد مبلغاً أقل مما استثمرت. قد تؤثر تحركات العملات ومواعيد التداول والتسوية في النتيجة. لا يوجد عائد أو سيولة أو حماية لرأس المال مضمونة.",
      proposedMandateBody: "محفظة مُدارة بالدينار البحريني تحتفظ بمجموعة متنوعة من الأسهم الأمريكية المتوافقة مع الفحص الشرعي، عبر مزودي خدمات مرخصين مقترحين.",
      riskBody: "يمكن أن تتسبب الأسهم والعملات في خسائر. يخضع الاسترداد للمواعيد وشروط التسوية المقترحة وغير النهائية. السيولة غير مضمونة.",
      unitsNote: "الوحدات في حساب أمانة",
      navNote: "سعر التداول الحالي",
      returnNote: "الأداء السابق لا يضمن نتائج مستقبلية",
      cashNote: "الرصيد النقدي المتاح",
      basedOn: "سجلات المحفظة",
      availableCash: "النقد المتاح",
      portfolioMix: "توزيع المحفظة",
      investedValue: "المبلغ المقدر استثماره",
      estimatedGainLoss: "المكسب / الخسارة المقدرة",
      redemptionAmount: "المبلغ المراد استرداده",
      availableToRedeem: "المتاح للاسترداد",
      redemptionEstimate: "تقدير الاسترداد",
      redemptionAmountError: "أدخل مبلغاً لا يتجاوز قيمة محفظتك المتاحة.",
      comparisonBase: "بدءاً من 1,000 دينار بحريني",
      afterTwelveMonths: "القيمة التقديرية بعد 12 شهراً",
      fundHoldingsDesc: "تُطبّق أوزان قطاعات SPUS المنشورة على قيمة استثمار أمانة الحالية لتقدير المبالغ بالدينار.",
      screenStatus: "حالة الفحص الشرعي",
      demoIssuer: "أسهم أمريكية",
      noLiveData: "لكل استثمار حالة فحص وتاريخ مراجعة.",
      fundOwns: "أمانة محفظة مُدارة من الاستثمارات المتوافقة مع الفحص الشرعي.",
      invest: "استثمر",
      contribution: "مساهمة",
      subscriptionDetail: "مساهمة",
      createSubscription: "متابعة المساهمة",
      createInstruction: "مساهمة شهرية",
      orderHistory: "سجل المساهمات",
      noOrdersBody: "ستظهر مساهماتك هنا.",
      noPayment: "راجع المبلغ وشروط الاستثمار قبل المتابعة.",
      minGuide: "الحد الأدنى للمساهمة: 25 ديناراً.",
      nextDealing: "تاريخ التداول التالي",
      cutoffValue: "موعد الإقفال 11:00 بتوقيت البحرين",
      navAssumption: "سعر الاستثمار التقديري",
      costAssumption: "رسوم العملية",
      costAssumptionValue: "لم تُحدد",
      fxAssumption: "سعر مرجعي للدولار/الدينار",
      fxValue: "0.376",
      sampleAssumptions: "الأسعار إرشادية.",
      recurringHelp: "اختر مبلغاً للمساهمة شهرياً. يمكنك الإيقاف أو الإلغاء لاحقاً.",
      nextRun: "تاريخ المساهمة التالية",
      refreshNote: "يتم حفظ التغييرات تلقائياً.",
      stageComplete: "",
      advanceOrder: "متابعة الطلب",
      orderId: "رقم الطلب",
      active: "فعال",
      paused: "موقوف مؤقتاً",
      cancelled: "ملغى",
      resetTitle: "إعادة ضبط بيانات أمانة",
      resetBody: "هل تريد استعادة قيم الحساب الأصلية ومسح النشاط المحفوظ على هذا الجهاز؟",
      resetDemo: "إعادة ضبط البيانات",
      resetConfirm: "إعادة ضبط بيانات أمانة على هذا الجهاز؟",
      resetDone: "تمت إعادة ضبط بيانات أمانة.",
      localStorageTitle: "البيانات على هذا الجهاز",
      localStorageBody: "يتم حفظ اللغة ونشاط التطبيق على هذا الجهاز. لا نجمع بيانات الهوية أو البنك.",
      preferencesCaution: "سيؤدي ذلك إلى مسح نشاط أمانة المحفوظ على هذا الجهاز.",
      sample: "",
      concept: "أمانة",
      demoNoticeTitle: "أمانة",
      demoNoticeBody: "القيم والعوائد والرسوم وتفاصيل الفحص توضيحية.",
      demoOnly: "توضيحي",
      footerLine: "أمانة · BISB Mobile",
      financialDataWarning: "قيم المحفظة والمقارنات توضيحية.",
      allValues: "القيم والمقارنات توضيحية.",
      dealingDate: "تاريخ التداول",
      currentSampleStatus: "حالة الفحص الحالية",
      holding: "استثمار",
      screened: "تم الفحص",
      underReview: "قيد المراجعة",
      screenMethod: "منهج الفحص الشرعي",
      screenMethodBody: "تُراجع معايير الفحص وحدوده ومصادر البيانات مع تغير معلومات الشركات.",
      statusDisclaimer: "تعكس حالة الفحص معلومات الشركات المتاحة ولا تمثل فتوى شرعية.",
      noApprovals: "تعتمد قرارات الفحص على إفصاحات الشركات المتاحة وقد تتغير بعد المراجعة.",
      exploreDetail: "يعرض كل استثمار مجال عمله وأحدث سجل للفحص.",
      zakatIntro: "أدخل الموجودات والالتزامات المؤهلة لتقدير الزكاة. هذا لا يحدد وجوبها عليك.",
      goldThreshold: "نصاب الذهب · دينار بحريني",
      silverThreshold: "نصاب الفضة · دينار بحريني",
      zakatBelow: "الإجمالي أقل من النصاب المحدد",
      netAssets: "صافي الموجودات",
      selectedThreshold: "النصاب المحدد",
      zakatDue: "تقدير الزكاة بنسبة 2.5٪",
      nisabNote: "تتغير قيم النصاب مع أسعار المعادن. راجع القيم الحالية عبر الروابط المرجعية.",
      voluntaryDesc: "حدد نسبة من الربح المحقق الإيجابي. هذا منفصل عن التطهير الواجب.",
      eligibleProfit: "الربح المحقق المؤهل",
      givingNoProfit: "لا يوجد ربح محقق إيجابي في المحفظة الحالية، لذا يساوي التقدير 0.000 دينار بحريني.",
      givingSeparation: "العطاء الاختياري منفصل عن التطهير الواجب. لا يتم الدفع أو التبرع هنا."
    }
  };

  function tr(key) {
    return BRAND_COPY[locale]?.[key] ?? FEATURE_WORDS[locale]?.[key] ?? WORDS[locale]?.[key] ?? BRAND_COPY.en[key] ?? FEATURE_WORDS.en[key] ?? WORDS.en[key] ?? key;
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  }

  function money(value, digits = 3) {
    const number = Number.isFinite(Number(value)) ? Number(value) : 0;
    return new Intl.NumberFormat(locale === "ar" ? "ar-BH" : "en-BH", { style: "currency", currency: "BHD", currencyDisplay: "code", minimumFractionDigits: digits, maximumFractionDigits: digits }).format(number);
  }

  function number(value, digits = 2) {
    return new Intl.NumberFormat(locale === "ar" ? "ar-BH" : "en-BH", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(Number(value) || 0);
  }

  function date(value, options = { day: "2-digit", month: "short", year: "numeric" }) {
    const parsed = new Date(value);
    return Number.isNaN(parsed.valueOf()) ? esc(value) : new Intl.DateTimeFormat(locale === "ar" ? "ar-BH" : "en-BH", options).format(parsed);
  }

  function titleCaseStatus(status) {
    const map = { active: "active", paused: "paused", cancelled: "cancelled", pending: "pending", calculated: "calculated", remitted: "remitted" };
    return tr(map[status] || status);
  }

  function sampleTag(label = tr("sample")) {
    return "";
  }

  function displayReference(value) {
    return String(value ?? "").replace(/(?:SAMPLE|DEMO)/gi, "").replace(/[-_]{2,}/g, "-").replace(/^[-_]+|[-_]+$/g, "");
  }

  function statusChip(label, tone = "neutral") {
    return `<span class="status-chip ${tone}"><span class="status-dot" aria-hidden="true"></span>${esc(label)}</span>`;
  }

  function icon(name, size = 18) {
    const paths = {
      overview: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5v10h13v-10M9 19.5v-6h6v6"/>',
      portfolio: '<path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/><path d="M18 6h-3"/>',
      profile: '<circle cx="12" cy="8" r="3.2"/><path d="M5 20c.6-3.5 2.8-5.3 7-5.3s6.4 1.8 7 5.3"/><path d="m17 5 1.5 1.5L21 4"/>',
      invest: '<path d="M12 5v14M5 12h14"/><circle cx="12" cy="12" r="9"/>',
      sharia: '<path d="M12 3 20 6v5c0 5.2-3.2 8.4-8 10-4.8-1.6-8-4.8-8-10V6z"/><path d="m8.5 12.5 2.2 2.2 4.8-5"/>',
      purification: '<path d="M12 3c2.6 3.2 5.5 6 5.5 9.7a5.5 5.5 0 0 1-11 0C6.5 9 9.4 6.2 12 3Z"/><path d="M9.3 14c.4 1.5 1.2 2.3 2.7 2.7"/>',
      redeem: '<path d="M4 8h14a3 3 0 0 1 0 6H7"/><path d="m10 5-3 3 3 3"/><path d="M20 17H6a3 3 0 0 1 0-6h11"/><path d="m14 14 3 3-3 3"/>',
      activity: '<path d="M4 5h16M4 10h16M4 15h10M4 20h10"/><circle cx="18" cy="17" r="3"/>',
      preferences: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.9.2l-.2.1h-3.4l-.1-.2a1.7 1.7 0 0 0-1.6-1.1 1.7 1.7 0 0 0-.9.3l-.2.1-2.9-1.7.1-.2A1.7 1.7 0 0 0 6.5 15l-.1-.2v-3.4l.2-.1a1.7 1.7 0 0 0 .8-2.5l-.1-.2L9 5.7l.2.1a1.7 1.7 0 0 0 2.5-.8l.1-.2h3.4l.1.2a1.7 1.7 0 0 0 2.5.8l.2-.1 1.7 2.9-.1.2a1.7 1.7 0 0 0 .8 2.5l.2.1v3.4z"/>',
      warning: '<path d="m12 3 9.2 16H2.8L12 3Z"/><path d="M12 9v4.5M12 17h.01"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
      arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
      download: '<path d="M12 4v11M7 10l5 5 5-5"/><path d="M5 20h14"/>',
      calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M7.5 3v4M16.5 3v4M4 9h16"/>',
      receipt: '<path d="M6 3.5h12v17l-2.5-1.7-3.5 1.7-3.5-1.7L6 20.5z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
      search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4 4"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
      sparkle: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
      trend: '<path d="m4 16 5-5 3.5 3.5L20 7"/><path d="M15 7h5v5"/>',
      globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
      lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'
    };
    return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.info}</svg>`;
  }

  function nowIso() { return new Date().toISOString(); }
  function addEvent(key, detail, type = "general", amount = null, eventDate = nowIso()) {
    state.events.unshift({ id: `EV-${Date.now()}`, key, detail, type, amount, date: eventDate });
    state.events = state.events.slice(0, 60);
  }

  function routeTitle() { return tr(route); }
  function heading(title, desc, actions = "") {
    return `<div class="view-heading"><div><h1>${esc(title)}</h1><p>${esc(desc)}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
  }

  function sectionHeading(title, desc = "", action = "") {
    return `<div class="section-row"><div><h2>${esc(title)}</h2>${desc ? `<p>${esc(desc)}</p>` : ""}</div>${action}</div>`;
  }

  function viewTitle(key) {
    const descKey = `${key}Desc`;
    return heading(tr(key), tr(descKey));
  }

  function performanceTotals() {
    const credited = state.redemptions.filter((item) => item.stage === 3);
    return {
      unrealized: (state.nav - state.averageCost) * state.units,
      realizedGain: credited.reduce((sum, item) => sum + Math.max(0, Number(item.pnl) || 0), 0),
      realizedLoss: credited.reduce((sum, item) => sum + Math.min(0, Number(item.pnl) || 0), 0)
    };
  }

  function sampleNetGainLoss() {
    const totals = performanceTotals();
    return totals.unrealized + totals.realizedGain + totals.realizedLoss;
  }

  function comparisonValue(value) { return `${value > 0 ? "+" : ""}${number(value, 1)}%`; }

  function routeButton(id, label, className = "button-primary", iconName = "") {
    return `<button class="${className}" type="button" data-action="navigate" data-route="${esc(id)}">${iconName ? icon(iconName, 15) : ""}${esc(label)}</button>`;
  }

  function navButton(id, iconName) {
    const isCurrent = route === id || (id === "more" && MORE_ROUTES.has(route));
    const current = isCurrent ? ' aria-current="page"' : "";
    return `<button class="nav-button" type="button" data-action="navigate" data-route="${id}"${current}>${icon(iconName, 18).replace("<svg ", '<svg class="nav-icon" ')}<span>${esc(tr(id))}</span></button>`;
  }

  function conceptBanner() {
    return "";
  }

  function statusForHolding(holding) {
    return state.scenarioRun && holding.ticker === SCENARIO_TICKER ? "review" : holding.baseStatus;
  }

  function statusForHoldingChip(status) {
    if (status === "review") return statusChip(tr("underReview"), "warning");
    return statusChip(tr("screened"), "success");
  }

  function orderStages(order, redemption = false) {
    const labels = redemption ? ["stepReceived", "stepPriced", "stepSettled", "stepCredited"] : ["stepReceived", "stepPriced", "stepSettled"];
    return `<div class="step-track" aria-label="${esc(redemption ? tr("redemptionStages") : tr("orderHistory"))}">${labels.map((label, index) => `<div class="step-item ${index < order.stage || order.stage >= labels.length - 1 ? "done" : index === order.stage ? "current" : ""}"><span>${esc(tr(label))}</span></div>`).join("")}</div>`;
  }

  function openModal(title, subtitle, body, focusSelector = "button, input, select, textarea") {
    modalReturnFocus = document.activeElement;
    modalRoot.innerHTML = `<div class="modal-backdrop" data-action="backdrop"><section class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title"><header class="modal-header"><div><h2 id="modal-title">${esc(title)}</h2>${subtitle ? `<p>${esc(subtitle)}</p>` : ""}</div><button class="modal-close" type="button" data-action="close-modal" aria-label="${esc(tr("close"))}">${icon("close", 17)}</button></header><div class="modal-body">${body}</div></section></div>`;
    document.body.classList.add("modal-open");
    modalRoot.querySelector(focusSelector)?.focus();
  }

  function closeModal() {
    modalRoot.innerHTML = "";
    document.body.classList.remove("modal-open");
    if (modalReturnFocus?.focus) modalReturnFocus.focus();
  }

  function toast(message, tone = "success") {
    const node = document.createElement("div");
    node.className = `toast ${tone === "warning" ? "warning" : ""}`;
    node.innerHTML = `${icon(tone === "warning" ? "warning" : "check", 15)}<span>${esc(message)}</span>`;
    toastRoot.append(node);
    if (tone !== "warning") playSuccessFeedback();
    window.setTimeout(() => node.remove(), 3800);
  }

  function playSuccessFeedback() {
    if (!feedbackEnabled) return;
    try { navigator.vibrate?.(12); } catch (_) { /* vibration is optional */ }
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      feedbackAudio ||= new AudioContextClass();
      if (feedbackAudio.state === "suspended") feedbackAudio.resume().catch(() => {});
      const now = feedbackAudio.currentTime;
      const tone = feedbackAudio.createOscillator();
      const volume = feedbackAudio.createGain();
      tone.type = "sine";
      tone.frequency.setValueAtTime(760, now);
      tone.frequency.exponentialRampToValueAtTime(920, now + 0.07);
      volume.gain.setValueAtTime(0.0001, now);
      volume.gain.exponentialRampToValueAtTime(0.018, now + 0.01);
      volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);
      tone.connect(volume);
      volume.connect(feedbackAudio.destination);
      tone.start(now);
      tone.stop(now + 0.12);
    } catch (_) { /* browser sound may be unavailable or muted */ }
  }

  function primaryNav() {
    return ["overview", "invest", "compare", "portfolio", "more"];
  }

  function primaryNavMarkup(className = "primary-nav") {
    const icons = { overview: "overview", invest: "invest", compare: "trend", portfolio: "portfolio", more: "menu" };
    return `<nav class="${className}" aria-label="${esc(tr("menu"))}">${primaryNav().map((id) => navButton(id, icons[id])).join("")}</nav>`;
  }

  function renderShell() {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = route === "overview" ? "Amanah · BISB Mobile" : `${routeTitle()} · Amanah | BISB Mobile`;
    app.innerHTML = `
      <aside class="sidebar" id="sidebar">
        <div class="brand-lockup"><img src="assets/bisb-logo-header.png" alt="BisB" /><span class="brand-separator" aria-hidden="true"></span><span class="brand-name">Amanah<small>BISB MOBILE</small></span></div>
        <p class="nav-label">${esc(tr("menu"))}</p>
        ${primaryNavMarkup()}
        <div class="sidebar-spacer"></div>
        <div class="sidebar-card"><strong>${icon("sparkle", 15)}${esc(tr("concept"))}</strong><p>${esc(tr("demoNoticeTitle"))}. ${esc(tr("allValues"))}.</p></div>
        <div class="sidebar-foot"><span>${esc(tr("footerLine"))}</span>${sampleTag()}</div>
      </aside>
      <main class="main-area">
        <header class="topbar"><div class="topbar-left"><button type="button" class="icon-button menu-toggle" data-action="toggle-menu" aria-label="${esc(tr("menu"))}">${icon("menu", 18)}</button><img class="topbar-logo" src="assets/bisb-logo-header.png" alt="BisB" /><div><div class="topbar-eyebrow">${esc(tr("overviewEyebrow"))}</div><p class="topbar-title">${esc(route === "overview" ? tr("amanahTitle") : routeTitle())}</p></div></div><div class="topbar-actions"><div class="locale-switch" role="group" aria-label="${esc(tr("localeTitle"))}"><button class="locale-button" type="button" data-action="locale" data-locale="en" aria-pressed="${locale === "en"}">${esc(tr("langEnglishShort"))}</button><button class="locale-button" type="button" data-action="locale" data-locale="ar" aria-pressed="${locale === "ar"}">${esc(tr("langArabicShort"))}</button></div></div></header>
        <div id="page-content">${renderView()}</div>
      </main>
      ${primaryNavMarkup("mobile-bottom-nav")}`;
  }

  function render() {
    renderShell();
    save();
  }

  function activityMark(type) {
    const name = type === "sharia" ? "sharia" : type === "purification" ? "purification" : type === "order" ? "invest" : type === "redemption" ? "redeem" : type === "profile" ? "profile" : "activity";
    const tone = type === "purification" ? "mint" : type === "sharia" ? "amber" : "";
    return `<span class="activity-mark ${tone}">${icon(name, 15)}</span>`;
  }

  function eventDetail(event) {
    const recordId = String(event.detail || "").split(" · ")[0];
    const seededDetails = {
      "EV-018": () => `${money(50)} · ${tr("contribution")}`,
      "EV-014": () => `ASMC · ${tr("seedScreeningDetail")}`,
      "EV-013": () => `2026 Q3 · ${tr("pending")}`,
      "EV-008": () => `RED-SAMPLE-008 · ${money(24)} ${tr("seedRedemptionDetail")}`
    };
    if (seededDetails[event.id]) return seededDetails[event.id]();
    switch (event.key) {
      case "eventScenarioRestatement": return `ASMC · ${tr("originalRecord")} 4.7% → ${tr("correctedRecord")} 6.2% · CORR-SAMPLE-026`;
      case "eventScenarioBlock": return `ASMC · ${tr("stopAllocation")}`;
      case "eventScenarioIncome": return `PUR-SAMPLE-CORR-026 · ${money(.450)} ${tr("scenarioIncomeDetail")}`;
      case "eventScenarioReviewOutcome": return tr("scenarioOutcomeDetail");
      case "eventScenarioDisposal": return tr("scenarioDisposalDetail");
      case "eventScenarioTransfer": return `${SCENARIO_TRANSFER.receipt} · ${money(SCENARIO_TRANSFER.amount)} ${tr("scenarioTransferDetail")}`;
      case "eventOrderReceived": {
        const order = state.orders.find((item) => item.id === recordId);
        return order ? `${order.id} · ${tr("detailRequested")} ${money(order.amount)}` : `${recordId} · ${tr("activityDetails")}`;
      }
      case "eventOrderPriced": {
        const order = state.orders.find((item) => item.id === recordId);
        return order ? `${order.id} · ${tr("investedValue")} ${money(order.amount * (1 - (Number(order.costRate) || 0)))}` : `${recordId} · ${tr("activityDetails")}`;
      }
      case "eventOrderSettled": {
        const order = state.orders.find((item) => item.id === recordId);
        return order ? `${order.id} · ${tr("contribution")} ${money(order.amount)}` : `${recordId} · ${tr("activityDetails")}`;
      }
      case "eventRecurringCreated":
      case "eventRecurringPaused":
      case "eventRecurringResumed":
      case "eventRecurringCancelled": {
        const instruction = state.recurring.find((item) => item.id === recordId);
        const frequency = instruction?.frequency === "Monthly" ? tr("monthly") : instruction?.frequency;
        return instruction ? `${instruction.id} · ${money(instruction.amount)} · ${frequency}` : `${recordId} · ${tr("activityDetails")}`;
      }
      case "eventRedemptionReceived":
      case "eventRedemptionPriced":
      case "eventRedemptionSettled":
      case "eventRedemptionCredited": {
        const redemption = state.redemptions.find((item) => item.id === recordId);
        if (!redemption) return `${recordId} · ${tr("activityDetails")}`;
        if (event.key === "eventRedemptionReceived") return `${redemption.id} · ${tr("redemptionAmount")} ${money(redemption.proceeds)}`;
        if (event.key === "eventRedemptionPriced") return `${redemption.id} · ${tr("estimatedProceeds")} ${money(redemption.proceeds)}`;
        if (event.key === "eventRedemptionSettled") return `${redemption.id} · ${tr("redeemSettled")}`;
        return `${redemption.id} · ${tr("redeemCredited")}`;
      }
      case "eventRiskChoice": return tr("activityDetails");
      default: {
        const detail = event.detail || "";
        if (/\b(?:sample\s+)?units?\b|\bNAV\b|\bunitized\b|وحدات|الوحدة|صافي قيمة الوحدة/iu.test(detail)) return tr("activityDetails");
        return /[\u0600-\u06FF]/u.test(detail) || locale !== "ar" ? detail || tr("eventNoAmount") : tr("activityDetails");
      }
    }
  }

  function eventRow(event) {
    const detail = eventDetail(event);
    const amount = event.amount == null ? "" : `<span class="activity-value">${money(event.amount)} ${sampleTag()}</span>`;
    return `<div class="activity-row">${activityMark(event.type)}<div class="activity-copy"><strong>${esc(tr(event.key))}</strong><span>${esc(detail)} · ${date(event.date, { day: "2-digit", month: "short" })}</span></div>${amount}</div>`;
  }

  function renderOverview() {
    const portfolio = state.units * state.nav;
    const gainLoss = sampleNetGainLoss();
    const oneYearReturn = SPUS_BENCHMARK.returns.find((item) => item.label === "1Y");
    const benchmarkDate = date(`${SPUS_BENCHMARK.asOf}T00:00:00Z`, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
    const compareShortcut = `<button class="home-compare-strip" type="button" data-action="navigate" data-route="compare" aria-label="${esc(tr("homeCompareTitle"))} ${number(oneYearReturn.value, 2)}%, ${esc(benchmarkDate)}"><span class="home-compare-icon">${icon("trend", 15)}</span><span class="home-compare-copy"><strong>SPUS · 1Y</strong><small>${esc(tr("spusMetricNote"))} · ${esc(benchmarkDate)}</small></span><strong class="home-compare-value">+${number(oneYearReturn.value, 2)}%</strong><span class="home-compare-arrow">${icon("arrow", 13)}</span></button>`;
    return `
      <section class="hero-card home-hero" aria-label="${esc(tr("portfolioValue"))}">
        <div class="hero-kicker">${icon("portfolio", 15)}<span>${esc(tr("portfolioValue"))}</span></div>
        <div class="home-value-row"><h2><small>${esc(tr("accountLabel"))}</small>${money(portfolio)}</h2><div class="home-gain ${gainLoss < 0 ? "negative" : "positive"}"><span>${esc(tr("sampleGainLoss"))}</span><strong>${money(gainLoss)}</strong></div></div>
        <div class="home-actions">${routeButton("invest", tr("contribute"), "button-primary", "invest")}</div>${compareShortcut}
      </section>
      <section class="card card-pad home-sector-card"><div class="card-header"><div><h2 class="card-title">${esc(tr("portfolioTrend"))}</h2><p class="card-subtitle">${esc(tr("sampleSeries"))}</p></div></div>${portfolioAllocation(true)}<div class="home-sector-footer">${routeButton("portfolio", tr("viewAllSectors"), "button-quiet button-small", "portfolio")}</div></section>`;
  }

  function sectorAmounts(total = state.units * state.nav) {
    const safeTotal = Math.max(0, Number(total) || 0);
    const totalWeight = SPUS_SECTOR_MIX.reduce((sum, sector) => sum + sector.weight, 0);
    const totalMilliBhd = Math.round(safeTotal * 1000);
    const exact = SPUS_SECTOR_MIX.map((sector) => totalMilliBhd * sector.weight / totalWeight);
    const rounded = exact.map(Math.floor);
    let remainder = totalMilliBhd - rounded.reduce((sum, amount) => sum + amount, 0);
    const order = exact.map((amount, index) => ({ index, fraction: amount - rounded[index] })).sort((a, b) => b.fraction - a.fraction);
    for (let i = 0; i < remainder; i++) rounded[order[i % order.length].index] += 1;
    return SPUS_SECTOR_MIX.map((sector, index) => ({ ...sector, value: rounded[index] / 1000 }));
  }

  function portfolioAllocation(compact = false, sectors = sectorAmounts()) {
    const shown = compact ? sectors.slice(0, 3) : sectors;
    return `<div class="sector-allocation-list ${compact ? "compact" : ""}" aria-label="${esc(tr("portfolioTrend"))}">${shown.map((sector) => `<div class="sector-allocation-row"><div class="sector-allocation-heading"><strong>${esc(tr(sector.key))}</strong><span>${number(sector.weight, 2)}%</span><strong class="sector-allocation-value">${money(sector.value)}</strong></div><div class="allocation-track" aria-hidden="true"><span style="width:${Math.min(100, Math.max(0, sector.weight)).toFixed(2)}%"></span></div></div>`).join("")}</div>`;
  }

  function renderPortfolio() {
    const total = state.units * state.nav;
    const performance = performanceTotals();
    const actions = `${routeButton("redeem", tr("redeemUnits"), "button-primary", "redeem")}${routeButton("invest", tr("contribute"), "button-secondary", "invest")}`;
    return `${heading(tr("portfolio"), tr("portfolioDesc"), actions)}<section class="card card-pad portfolio-allocation-card"><div class="card-header"><div><h2 class="card-title">${esc(tr("portfolioTrend"))}</h2><p class="card-subtitle">${esc(tr("sampleSeries"))}</p></div><strong class="portfolio-allocation-total">${money(total)}</strong></div>${portfolioAllocation(false)}<div class="panel-callout allocation-disclosure">${icon("info", 16)}<p>${esc(tr("allocationEstimateNote"))}</p></div></section><section class="card card-pad portfolio-summary-card"><div class="card-header"><div><h2 class="card-title">${esc(tr("portfolioValue"))}</h2><p class="card-subtitle">${esc(tr("performanceFromLedger"))}</p></div></div><div class="calc-box"><div class="calc-row"><span>${esc(tr("estimatedGainLoss"))}</span><strong class="${sampleNetGainLoss() < 0 ? "negative-text" : "positive-text"}">${money(performance.unrealized + performance.realizedGain + performance.realizedLoss)}</strong></div><div class="calc-row"><span>${esc(tr("availableCash"))}</span><strong>${money(state.cashBhd)}</strong></div><div class="calc-row calc-total"><span>${esc(tr("portfolioValue"))}</span><strong>${money(total)}</strong></div></div></section>`;
  }

  function renderMore() {
    const destinations = [
      ["explore", "exploreDesc", "search"],
      ["giving", "givingDesc", "receipt"],
      ["sharia", "shariaDesc", "sharia"],
      ["purification", "purificationDesc", "purification"],
      ["activity", "activityDesc", "activity"],
      ["profile", "profileDesc", "profile"],
      ["preferences", "preferencesDesc", "preferences"],
    ];
    return `${viewTitle("more")}<section class="more-grid" aria-label="${esc(tr("more"))}">${destinations.map(([id, description, iconName]) => `<article class="card more-card"><span class="more-icon">${icon(iconName, 20)}</span><div class="more-copy"><h2>${esc(tr(id))}</h2><p>${esc(tr(description))}</p></div><button type="button" class="button-quiet button-small" data-action="navigate" data-route="${id}">${esc(tr("open"))} ${icon("arrow", 13)}</button></article>`).join("")}</section><div class="panel-callout">${icon("info", 16)}<div><strong>${esc(tr("moreNoteTitle"))}</strong><p>${esc(tr("moreNoteBody"))}</p></div></div>`;
  }

  function renderMarket() {
    return `${viewTitle("market")}<section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("marketPulse"))}</h2><p class="card-subtitle">${esc(tr("basedOn"))}</p></div>${sampleTag()}</div><div class="calc-box"><div class="calc-row"><span>USD / BHD ${sampleTag()}</span><strong>0.376 ${esc(tr("illustrative"))}</strong></div><div class="calc-row"><span>${esc(tr("marketWindow"))} ${sampleTag()}</span><strong>${esc(tr("marketClosed"))}</strong></div><div class="calc-row"><span>${esc(tr("dataCutoff"))} ${sampleTag()}</span><strong>${date("2026-09-30")}</strong></div></div><div class="panel-callout warning">${icon("warning", 16)}<p>${esc(tr("marketNote"))}</p></div></section>`;
  }

  function renderProfile() {
    const saved = state.profile;
    const selected = (key, value) => saved?.[key] === value ? " selected" : "";
    const action = saved ? `<span class="status-chip success"><span class="status-dot"></span>${esc(tr("profileCompleted"))}</span>` : sampleTag();
    return `${viewTitle("profile")}<div class="page-grid two-col">
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("suitabilityTitle"))}</h2><p class="card-subtitle">${esc(tr("suitabilityBody"))}</p></div>${action}</div>
        ${saved ? `<div class="panel-callout success">${icon("check", 16)}<p><strong>${esc(tr("profileSaved"))}.</strong> ${esc(tr("profileSavedBody"))}</p></div>` : ""}
        <form data-form="suitability"><div class="form-grid">
          <div class="form-field full"><label for="horizon">${esc(tr("horizon"))}</label><select id="horizon" name="horizon" required><option value="short"${selected("horizon", "short")}>${esc(tr("horizonShort"))}</option><option value="medium"${selected("horizon", "medium")}>${esc(tr("horizonMedium"))}</option><option value="long"${selected("horizon", "long")}>${esc(tr("horizonLong"))}</option></select></div>
          <div class="form-field full"><label for="loss-response">${esc(tr("lossQuestion"))}</label><select id="loss-response" name="lossResponse" required><option value="sell"${selected("lossResponse", "sell")}>${esc(tr("lossSell"))}</option><option value="wait"${selected("lossResponse", "wait")}>${esc(tr("lossWait"))}</option><option value="stay"${selected("lossResponse", "stay")}>${esc(tr("lossStay"))}</option></select></div>
          <div class="form-field full"><label for="liquidity">${esc(tr("liquidityQuestion"))}</label><select id="liquidity" name="liquidity" required><option value="yes"${selected("liquidity", "yes")}>${esc(tr("liquidityYes"))}</option><option value="no"${selected("liquidity", "no")}>${esc(tr("liquidityNo"))}</option></select></div>
          <div class="form-field"><label for="plan-amount">${esc(tr("amountPlan"))} ${sampleTag()}</label><div class="input-wrap"><span>BHD</span><input id="plan-amount" name="amountPlan" type="number" min="0" step="5" value="${saved?.amountPlan ?? 25}" required /></div></div>
          <div class="form-field"><label>${esc(tr("noIdentity"))}</label><div class="calc-box"><span class="micro-label">${icon("lock", 13)}${esc(tr("noIdentityNote"))}</span></div></div>
          <div class="form-field full"><label class="check-line"><input name="riskAck" type="checkbox" required${saved?.riskAck ? " checked" : ""} /><span>${esc(tr("riskAck"))}</span></label></div>
        </div><div class="form-footer"><button class="button-primary" type="submit">${esc(tr("saveProfile"))} ${icon("arrow", 14)}</button></div></form>
      </section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("proposedMandate"))}</h2><p class="card-subtitle">${esc(tr("notFinal"))}</p></div>${sampleTag()}</div><div class="disclosure-list">
        <div class="disclosure-item"><strong>${esc(tr("proposedMandate"))}</strong><p>${esc(tr("proposedMandateBody"))}</p></div>
        <div class="disclosure-item"><strong>${esc(tr("feesTitle"))}</strong><p>${esc(tr("feesBody"))}</p></div>
        <div class="disclosure-item"><strong>${esc(tr("approvalTitle"))}</strong><p>${esc(tr("approvalBody"))}</p></div>
        <div class="disclosure-item"><strong>${esc(tr("riskDisclosure"))}</strong><p>${esc(tr("riskBody"))}</p></div>
        <div class="disclosure-item"><strong>${esc(tr("suitabilityDisclosure"))}</strong><p>${esc(tr("suitabilityBody"))}</p></div>
        <div class="disclosure-item"><strong>${esc(tr("screeningDisclosure"))}</strong><p>${esc(tr("screeningDisclosureBody"))}</p></div>
      </div></section>
    </div>`;
  }

  function renderExplore() {
    const sectors = sectorAmounts();
    const title = locale === "ar" ? "توزيع قطاعات SPUS" : "SPUS sector allocation";
    const note = locale === "ar"
      ? "تُطبّق أوزان القطاعات المنشورة لصندوق SPUS على قيمة أمانة كتقدير، وليست حيازات مباشرة لحسابك."
      : "Published SPUS sector weights applied to your Amanah value as an estimate; these are not live account holdings.";
    const rows = sectors.map((sector) => `<article class="explore-card"><h3>${esc(tr(sector.key))}</h3><div class="calc-row"><span>${esc(tr("allocation"))}</span><strong>${number(sector.weight, 1)}%</strong></div><div class="allocation-track" aria-hidden="true"><span style="width:${Math.min(100, Math.max(0, sector.weight)).toFixed(1)}%"></span></div><div class="calc-row"><span>${esc(tr("valueBhd"))}</span><strong>${money(sector.value)}</strong></div></article>`).join("");
    return `${viewTitle("explore")}<section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(title)}</h2><p class="card-subtitle">${esc(tr("sampleSeries"))}</p></div>${sampleTag()}</div><div class="panel-callout warning">${icon("info", 16)}<p>${esc(note)}</p></div><div class="explore-grid">${rows}</div></section>`;
  }

  function renderCompare() {
    const totals = performanceTotals();
    const net = totals.unrealized + totals.realizedGain + totals.realizedLoss;
    const accountValue = state.units * state.nav;
    const benchmarkDate = date(`${SPUS_BENCHMARK.asOf}T00:00:00Z`, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
    const selectedReturn = SPUS_BENCHMARK.returns.find((item) => item.label === comparePeriod) || SPUS_BENCHMARK.returns.find((item) => item.label === "1Y");
    const maxReturn = Math.ceil(Math.max(...SPUS_BENCHMARK.returns.map((item) => item.value)) / 10) * 10;
    const bars = SPUS_BENCHMARK.returns.map((item) => {
      const height = Math.max(3, item.value / maxReturn * 100);
      const selected = item.label === comparePeriod;
      return `<button type="button" class="spus-period-column${selected ? " highlight" : ""}" data-action="compare-period" data-period="${esc(item.label)}" aria-label="${esc(item.label)} ${number(item.value, 2)}%" aria-pressed="${selected}"><strong>+${number(item.value, 2)}%</strong><span class="spus-period-bar" aria-hidden="true"><span style="height:${height.toFixed(1)}%"></span></span><span class="spus-period-label">${esc(item.label)}</span></button>`;
    }).join("");
    const scale = Math.max(10, Math.ceil(Math.abs(net) / 10) * 10);
    const barWidth = Math.min(50, Math.abs(net) / scale * 50);
    const barLeft = net < 0 ? 50 - barWidth : 50;
    const gainLossClass = net < 0 ? "negative" : net > 0 ? "positive" : "neutral";
    const netLabel = `${net > 0 ? "+" : net < 0 ? "−" : ""}${money(Math.abs(net))}`;
    const realizedNet = totals.realizedGain + totals.realizedLoss;
    const realizedNetLabel = `${realizedNet > 0 ? "+" : realizedNet < 0 ? "−" : ""}${money(Math.abs(realizedNet))}`;
    return `<div class="page-heading"><h1>${esc(tr("compareDesc"))}</h1></div><section class="card card-pad benchmark-card compare-overview-card"><div class="compare-hero"><div class="compare-hero-heading"><span>SPUS · ${esc(comparePeriod)}</span><span class="compare-hero-badge">${esc(benchmarkDate)}</span></div><strong class="compare-hero-return">+${number(selectedReturn.value, 2)}%</strong><div class="compare-hero-meta"><span>${esc(tr("spusMetricNote"))}</span></div><div class="compare-hero-glow" aria-hidden="true"></div></div><div class="compare-account-summary"><div><span>${esc(tr("accountValueLabel"))}</span><strong>${money(accountValue)}</strong></div><div><span>${esc(tr("netSample"))}</span><strong class="${net < 0 ? "negative-text" : net > 0 ? "positive-text" : ""}">${netLabel}</strong></div></div><div class="spus-period-chart"><div class="spus-period-grid" role="group" aria-label="${esc(tr("spusPeriodsLabel"))}">${bars}</div></div><p class="comparison-disclaimer">${esc(tr("comparisonDisclaimer"))}</p><a class="benchmark-source" href="${esc(SPUS_BENCHMARK.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(tr("benchmarkSource"))} ${icon("arrow", 12)}</a></section><section class="card card-pad account-result-card"><div class="account-result-title"><h2 class="card-title">${esc(tr("performanceNow"))}</h2></div><div class="account-chart" role="img" aria-label="${esc(tr("accountChartLabel"))}: ${netLabel}"><div class="account-chart-scale"><span>−${money(scale, 0)}</span><span>BHD 0</span><span>+${money(scale, 0)}</span></div><div class="account-chart-track"><span class="account-chart-zero"></span><span class="account-chart-bar ${gainLossClass}" style="left:${barLeft.toFixed(1)}%;width:${barWidth.toFixed(1)}%"></span></div></div><div class="account-breakdown" aria-label="${esc(tr("accountBreakdownLabel"))}"><div><span>${esc(tr("unrealized"))}</span><strong class="${totals.unrealized < 0 ? "negative-text" : "positive-text"}">${money(totals.unrealized)}</strong></div><div><span>${esc(tr("realizedNet"))}</span><strong class="${realizedNet < 0 ? "negative-text" : "positive-text"}">${realizedNetLabel}</strong></div></div></section>`;
  }

  function zakatResult(z = state.zakat) {
    const assets = [z.cash, z.bank, z.investments, z.gold, z.silver, z.other].reduce((sum, item) => sum + (Number(item) || 0), 0);
    const net = Math.max(0, assets - (Number(z.liabilities) || 0));
    const threshold = Number(z.nisabMethod === "silver" ? z.silverThreshold : z.goldThreshold) || 0;
    const due = z.lunarYear && threshold > 0 && net >= threshold ? net * 0.025 : 0;
    return { net, threshold, due, eligible: Boolean(z.lunarYear && threshold > 0 && net >= threshold) };
  }

  function zakatNumberField(name, labelKey, value) {
    return `<div class="form-field"><label for="zakat-${name}">${esc(tr(labelKey))}</label><div class="input-wrap"><span>BHD</span><input id="zakat-${name}" name="${name}" type="number" min="0" step="0.001" value="${Number(value) || 0}" inputmode="decimal" /></div></div>`;
  }

  function renderGiving() {
    const z = state.zakat;
    const result = zakatResult();
    const performance = performanceTotals();
    const eligibleProfit = Math.max(0, performance.realizedGain + performance.realizedLoss);
    const optionalGift = eligibleProfit * (Number(state.givingPercent) || 0) / 100;
    const resultTone = result.eligible ? "success" : "warning";
    return `${viewTitle("giving")}<div class="giving-grid"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("zakatTitle"))}</h2><p class="card-subtitle">${esc(tr("zakatIntro"))}</p></div>${sampleTag()}</div><form data-form="zakat"><div class="form-grid">${zakatNumberField("cash", "cash", z.cash)}${zakatNumberField("bank", "bankBalances", z.bank)}${zakatNumberField("investments", "investments", z.investments)}${zakatNumberField("gold", "gold", z.gold)}${zakatNumberField("silver", "silver", z.silver)}${zakatNumberField("other", "otherAssets", z.other)}${zakatNumberField("liabilities", "liabilities", z.liabilities)}<div class="form-field"><label for="zakat-method">${esc(tr("nisabChoice"))}</label><select id="zakat-method" name="nisabMethod"><option value="gold"${z.nisabMethod === "gold" ? " selected" : ""}>${esc(tr("goldOption"))}</option><option value="silver"${z.nisabMethod === "silver" ? " selected" : ""}>${esc(tr("silverOption"))}</option></select></div>${zakatNumberField("goldThreshold", "goldThreshold", z.goldThreshold)}${zakatNumberField("silverThreshold", "silverThreshold", z.silverThreshold)}<div class="form-field full"><label class="check-line"><input name="lunarYear" type="checkbox"${z.lunarYear ? " checked" : ""} /><span>${esc(tr("lunarYear"))}</span></label></div><div class="form-field full"><div class="panel-callout warning">${icon("info", 15)}<p>${esc(tr("nisabNote"))}</p></div></div></div><div class="form-footer"><button type="submit" class="button-primary">${esc(tr("calculate"))} ${icon("arrow", 14)}</button></div></form><div id="zakat-result" class="zakat-result ${resultTone}" aria-live="polite"><div><span id="zakat-result-label" class="micro-label">${esc(result.eligible ? tr("zakatDue") : tr("zakatBelow"))}</span><strong id="zakat-due">${money(result.due)}</strong></div><div class="calc-row"><span>${esc(tr("netAssets"))}</span><b id="zakat-net">${money(result.net)}</b></div><div class="calc-row"><span>${esc(tr("selectedThreshold"))}</span><b id="zakat-threshold">${money(result.threshold)}</b></div></div><div class="disclosure-item"><p>${esc(tr("zakatMethodNote"))}</p></div><div class="reference-links"><strong>${esc(tr("referenceLinks"))}</strong><a href="https://services.bahrain.bh/wps/portal/Zakat_en" target="_blank" rel="noopener noreferrer">${esc(tr("bahrainServices"))}</a><a href="https://www.bisb.com/en/bisb-search?page=14&search=" target="_blank" rel="noopener noreferrer">${esc(tr("bisbCalculator"))}</a><a href="https://www.kaaf.bh/en/zakah/calculator" target="_blank" rel="noopener noreferrer">${esc(tr("kaafCalculator"))}</a></div></section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("voluntaryTitle"))}</h2><p class="card-subtitle">${esc(tr("voluntaryDesc"))}</p></div>${sampleTag()}</div><form data-form="charity"><div class="form-field"><label for="charity-percent">${esc(tr("profitPercentage"))}</label><div class="input-wrap"><input id="charity-percent" name="percent" type="number" min="0" max="100" step="0.1" value="${Number(state.givingPercent) || 0}" /><span>%</span></div></div><div class="calc-box" style="margin-top:14px"><div class="calc-row"><span>${esc(tr("eligibleProfit"))}</span><strong id="charity-eligible-profit">${money(eligibleProfit)}</strong></div><div class="calc-row calc-total"><span>${esc(tr("optionalAmount"))}</span><strong id="charity-optional-amount" aria-live="polite">${money(optionalGift)}</strong></div></div>${eligibleProfit <= 0 ? `<p class="micro-label">${esc(tr("givingNoProfit"))}</p>` : ""}<div class="form-footer"><button type="submit" class="button-secondary">${esc(tr("saveGiving"))}</button></div></form><div class="panel-callout warning">${icon("info", 15)}<p>${esc(tr("givingSeparation"))}</p></div><div class="disclosure-item"><strong>${esc(tr("ledgerTitle"))}</strong><p>${esc(tr("receiptNotPersonal"))} ${esc(tr("noIndividualReceipt"))}</p>${routeButton("purification", tr("purification"), "button-quiet button-small")}</div></section></div>`;
  }

  function renderOrder(order) {
    const stageCount = 3;
    const canAdvance = order.stage < stageCount - 1;
    return `<article class="order-card"><div class="order-top"><div><strong>${esc(tr("subscriptionDetail"))} · ${esc(displayReference(order.id))}</strong><small>${date(order.createdAt)} · ${esc(tr("nextDealing"))}: ${date("2026-10-15")} · ${esc(tr("cutoffValue"))}</small></div><span class="order-amount">${money(order.amount)}</span></div>${orderStages(order)}<div class="calc-row"><span>${esc(tr("amountBhd"))}</span><strong>${money(order.amount)}</strong></div><div class="calc-row"><span>${esc(tr("investedValue"))} ${sampleTag()}</span><strong>${money(order.amount * (1 - (Number(order.costRate) || 0)))}</strong></div><div class="order-foot"><span>${esc(order.stage === 2 ? tr("stageComplete") : tr("noPayment"))}</span>${canAdvance ? `<button class="button-quiet button-small" type="button" data-action="advance-order" data-id="${esc(order.id)}">${esc(tr("advanceOrder"))} ${icon("arrow", 13)}</button>` : statusChip(tr("orderSettled"), "success")}</div></article>`;
  }

  function renderRecurring(instruction) {
    const statusMap = { active: "success", paused: "warning", cancelled: "neutral" };
    const statusText = instruction.status === "active" ? tr("active") : instruction.status === "paused" ? tr("paused") : tr("cancelled");
    return `<article class="instruction-card"><div class="order-top"><div><strong>${esc(tr("recurringAmount"))} · ${esc(displayReference(instruction.id))}</strong><small>${esc(tr("nextRun"))}: ${date(instruction.nextDate)} · ${esc(instruction.frequency === "Monthly" ? tr("monthly") : instruction.frequency)}</small></div><span class="order-amount">${money(instruction.amount)}</span></div><div class="ledger-meta">${statusChip(statusText, statusMap[instruction.status])}<span>${esc(tr("noPayment"))}</span></div>${instruction.status !== "cancelled" ? `<div class="instruction-actions">${instruction.status === "active" ? `<button class="button-quiet button-small" type="button" data-action="recurring-pause" data-id="${esc(instruction.id)}">${esc(tr("pause"))}</button>` : `<button class="button-quiet button-small" type="button" data-action="recurring-resume" data-id="${esc(instruction.id)}">${esc(tr("resume"))}</button>`}<button class="button-danger button-small" type="button" data-action="recurring-cancel" data-id="${esc(instruction.id)}">${esc(tr("cancel"))}</button></div>` : ""}</article>`;
  }

  function renderInvest() {
    const orders = [...state.orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const recurring = [...state.recurring].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const activeTab = `<div class="segmented" role="tablist" aria-label="${esc(tr("invest"))}"><button type="button" class="segment-button" role="tab" aria-selected="${investMode === "once"}" aria-pressed="${investMode === "once"}" data-action="invest-mode" data-mode="once">${esc(tr("oneTime"))}</button><button type="button" class="segment-button" role="tab" aria-selected="${investMode === "recurring"}" aria-pressed="${investMode === "recurring"}" data-action="invest-mode" data-mode="recurring">${esc(tr("recurring"))}</button></div>`;
    const oneTimePanel = `<section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("oneTime"))} ${esc(tr("subscriptionDetail"))}</h2><p class="card-subtitle">${esc(tr("noPayment"))}</p></div>${sampleTag()}</div><form data-form="subscription"><div class="form-grid"><div class="form-field"><label for="sub-amount">${esc(tr("amountBhd"))}</label><div class="input-wrap"><span>BHD</span><input id="sub-amount" name="amount" type="number" min="25" step="0.001" value="50" inputmode="decimal" required /></div><small>${esc(tr("minGuide"))}</small></div><div class="form-field"><label>${esc(tr("investedValue"))}</label><div class="calc-box"><div class="calc-row calc-total"><span>${esc(tr("investedValue"))}</span><strong id="estimated-invest-preview">${money(50)}</strong></div></div></div><div class="form-field full"><div class="panel-callout warning">${icon("calendar", 15)}<p><strong>${esc(tr("dealingDate"))}: ${date("2026-10-15")} · ${esc(tr("cutoffValue"))}.</strong> ${esc(tr("nextDealing"))}. ${esc(tr("fxAssumption"))}: ${esc(tr("fxValue"))}. ${esc(tr("sampleAssumptions"))}</p></div></div></div><div class="form-footer"><button class="button-primary" type="submit">${esc(tr("createSubscription"))} ${icon("arrow", 14)}</button></div></form></section>`;
    const recurringPanel = `<section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("createInstruction"))}</h2><p class="card-subtitle">${esc(tr("recurringHelp"))}</p></div>${sampleTag()}</div><form data-form="recurring"><div class="form-grid"><div class="form-field"><label for="rec-amount">${esc(tr("recurringAmount"))}</label><div class="input-wrap"><span>BHD</span><input id="rec-amount" name="amount" type="number" min="25" step="0.001" value="25" inputmode="decimal" required /></div><small>${esc(tr("minGuide"))}</small></div><div class="form-field"><label for="rec-frequency">${esc(tr("recurring"))}</label><select id="rec-frequency" name="frequency"><option value="Monthly">${esc(tr("monthly"))}</option></select></div><div class="form-field full"><div class="panel-callout">${icon("calendar", 15)}<p>${esc(tr("nextRun"))}: ${date("2026-11-02")}</p></div></div></div><div class="form-footer"><button class="button-primary" type="submit">${esc(tr("createInstruction"))} ${icon("arrow", 14)}</button></div></form></section>`;
    return `${heading(tr("invest"), tr("investDesc"), routeButton("redeem", tr("redeemUnits"), "button-secondary", "redeem"))}<div class="page-grid two-col"><div class="page-grid">${activeTab}${investMode === "once" ? oneTimePanel : recurringPanel}</div><div class="page-grid"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(investMode === "once" ? tr("orderHistory") : tr("recurringHistory"))}</h2><p class="card-subtitle">${esc(tr("refreshNote"))}</p></div>${sampleTag()}</div>${investMode === "once" ? orders.length ? orders.map(renderOrder).join("") : `<div class="empty-state"><strong>${esc(tr("noOrders"))}</strong>${esc(tr("noOrdersBody"))}</div>` : recurring.length ? recurring.map(renderRecurring).join("") : `<div class="empty-state"><strong>${esc(tr("noRecurring"))}</strong>${esc(tr("recurringHelp"))}</div>`}</section><div class="panel-callout warning">${icon("warning", 16)}<p>${esc(tr("lossBody"))}</p></div></div></div>`;
  }

  function historyEntry(title, detail, entryDate, tone = "", badge = tr("sample")) {
    return `<div class="history-item"><span class="history-mark ${tone}">${icon(tone === "success" ? "check" : tone === "warning" ? "warning" : "info", 11)}</span><div class="history-content"><strong>${esc(title)} ${sampleTag(badge)}</strong><p>${esc(detail)}</p><time>${date(entryDate)}</time></div></div>`;
  }

  function renderSharia() {
    const target = holdings.find((holding) => holding.ticker === SCENARIO_TICKER);
    const status = statusForHolding(target);
    const eventTrail = state.scenarioRun ? [
      historyEntry(tr("eventScenarioRestatement"), `${tr("originalRecord")}: 4.7% · ${tr("publishedDate")} 15 Aug 2026. ${tr("correctedRecord")}: 6.2% · ${tr("discoveredDate")} 30 Sep 2026.`, "2026-09-30", "warning"),
      historyEntry(tr("eventScenarioBlock"), `${tr("stopAllocation")}.`, "2026-09-30", "warning"),
      historyEntry(tr("eventScenarioIncome"), `${tr("correctionAttribution")} · ${money(.450)} ${tr("pooledAmount")}.`, "2026-10-01", ""),
      historyEntry(tr("eventScenarioReviewOutcome"), tr("scenarioOutcomeDetail"), "2026-10-01", "warning"),
      historyEntry(tr("eventScenarioDisposal"), tr("scenarioDisposalDetail"), "2026-10-01", "warning"),
      historyEntry(tr("eventScenarioTransfer"), `${tr("pooledReceiptId")}: ${SCENARIO_TRANSFER.receipt} · ${money(SCENARIO_TRANSFER.amount)} ${tr("pooledAmount")}.`, SCENARIO_TRANSFER.date, "success")
    ].join("") : `<div class="empty-state"><strong>${esc(tr("noScenario"))}</strong>${esc(tr("noScenarioBody"))}</div>`;
    const scenarioAction = state.scenarioRun ? `<span class="status-chip success"><span class="status-dot"></span>${esc(tr("scenarioDone"))}</span>` : `<button type="button" class="button-primary" data-action="run-scenario">${icon("sparkle", 15)}${esc(tr("runScenario"))}</button>`;
    return `${viewTitle("sharia")}<div class="page-grid two-col">
      <section class="scenario-card"><div class="scenario-inner"><div class="scenario-kicker">${icon("sparkle", 15)}${esc(tr("scenarioTitle"))} ${sampleTag()}</div><h3>${esc(tr("scenarioTitle"))}</h3><p>${esc(tr("scenarioBody"))}</p><div class="scenario-actions">${scenarioAction}<span class="micro-label">${esc(tr("statusDisclaimer"))}</span></div></div></section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("currentSampleStatus"))}</h2><p class="card-subtitle">${esc(target.name)} · ${esc(target.ticker)}</p></div>${statusForHoldingChip(status)}</div><div class="calc-box"><div class="calc-row"><span>${esc(tr("screenStatus"))}</span><strong>${esc(status === "review" ? tr("reviewNeeded") : tr("screened"))}</strong></div><div class="calc-row"><span>${esc(tr("sourceName"))}</span><strong>${esc(target.vintage)}</strong></div><div class="calc-row"><span>${esc(tr("reviewDate"))}</span><strong>${date(state.scenarioRun ? "2026-09-30" : target.reviewDate)}</strong></div></div><div class="panel-callout warning">${icon("warning", 16)}<p>${esc(tr("screeningDisclosureBody"))}</p></div></section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("scenarioRecords"))}</h2><p class="card-subtitle">${esc(tr("underlyingCause"))}</p></div>${sampleTag()}</div><div class="record-grid"><article class="record-box original"><div class="record-overline"><span>${esc(tr("originalRecord"))}</span>${sampleTag()}</div><h4>${esc(tr("reportedRatio"))}</h4><div class="record-value">4.7%</div><p>${esc(tr("publishedDate"))}: 15 Aug 2026 · ${esc(tr("sourceVintage"))}: sample feed v0.2</p><p>${esc(tr("reviewStatus"))}: ${esc(tr("screened"))}</p></article><article class="record-box corrected"><div class="record-overline"><span>${esc(tr("correctedRecord"))}</span>${state.scenarioRun ? statusChip(tr("underReview"), "warning") : sampleTag(tr("pending"))}</div><h4>${esc(tr("revisedRatio"))}</h4><div class="record-value">${state.scenarioRun ? "6.2%" : "—"}</div><p>${esc(tr("discoveredDate"))}: ${state.scenarioRun ? "30 Sep 2026" : esc(tr("proposedReview"))}</p><p>${esc(tr("sampleLimit"))}: 5.0% ${sampleTag()}</p></article></div><div class="panel-callout warning">${icon("info", 15)}<p>${esc(tr("thresholdNote"))} ${esc(tr("approvalTitle"))}</p></div></section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("scenarioTrace"))}</h2><p class="card-subtitle">${esc(tr("reviewTrail"))}</p></div>${sampleTag()}</div><div class="history-list">${eventTrail}</div></section>
      <div class="panel-callout">${icon("info", 16)}<p>${esc(tr("screeningDisclosureBody"))} ${esc(tr("noLiveData"))}</p></div>
    </div>`;
  }

  function statusTone(status) {
    return status === "pending" ? "warning" : status === "calculated" ? "neutral" : "success";
  }

  function purificationRow(entry) {
    const kind = entry.kind === "transfer" ? "pooledTransfer" : entry.kind === "correction" ? "correctionAttribution" : "dividendAttribution";
    const statusKey = entry.status;
    const status = statusChip(tr(statusKey), statusTone(entry.status));
    return `<article class="ledger-card"><div class="order-top"><div><strong>${esc(tr(kind))} · ${esc(entry.id)} ${sampleTag()}</strong><small>${esc(tr("period"))}: ${esc(entry.period)} · ${date(entry.date)}</small></div>${status}</div><div class="ledger-meta"><span>${esc(tr("factorSource"))}: ${esc(entry.factor)}</span><span>${esc(tr("versionLabel"))}: sample</span></div><div class="calc-row"><span>${esc(tr("attribution"))} ${sampleTag()}</span><strong>${money(entry.customerAmount)}</strong></div><div class="calc-row"><span>${esc(tr("pooledAmount"))} ${sampleTag()}</span><strong>${money(entry.poolAmount)}</strong></div>${entry.receipt ? `<div class="ledger-meta"><span>${esc(tr("pooledReceiptId"))}: ${esc(entry.receipt)}</span><span>${esc(tr("noIndividualReceipt"))}</span></div>` : ""}</article>`;
  }

  function renderPurification() {
    const transfers = [...state.charityTransfers].sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = transfers[0];
    const entries = [...state.purification].sort((a, b) => new Date(b.date) - new Date(a.date));
    return `${viewTitle("purification")}<div class="page-grid two-col"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("ledgerTitle"))}</h2><p class="card-subtitle">${esc(tr("ledgerDesc"))}</p></div>${sampleTag()}</div>${entries.length ? entries.map(purificationRow).join("") : `<div class="empty-state"><strong>${esc(tr("noLedger"))}</strong>${esc(tr("noLedgerBody"))}</div>`}</section>
      <div class="page-grid"><section class="receipt-card"><span class="receipt-icon">${icon("receipt", 18)}</span><h3>${esc(tr("receiptTitle"))}</h3><p>${esc(tr("receiptBody"))}</p><div class="panel-callout warning">${icon("info", 15)}<p>${esc(tr("noActualTransfer"))}</p></div><div class="calc-box" style="width:100%"><div class="calc-row"><span>${esc(tr("pooledAmount"))} ${sampleTag()}</span><strong>${latest ? money(latest.amount) : money(0)}</strong></div><div class="calc-row"><span>${esc(tr("pooledReceiptId"))}</span><strong>${esc(latest?.receipt || "—")}</strong></div><div class="calc-row"><span>${esc(tr("dateLabel"))}</span><strong>${latest ? date(latest.date) : "—"}</strong></div><div class="calc-row"><span>${esc(tr("attribution"))} · reconciliation</span><strong>${latest ? money(latest.customerAllocation) : money(0)}</strong></div></div><button type="button" class="button-secondary" data-action="download-pool-receipt" ${latest ? "" : "disabled"}>${icon("download", 14)}${esc(tr("downloadPoolReceipt"))}</button><span class="micro-label">${esc(tr("receiptNotPersonal"))}</span></section>
        <div class="panel-callout warning">${icon("info", 16)}<p>${esc(tr("receiptBody"))} ${esc(tr("approvalTitle"))}</p></div></div></div>`;
  }

  function openRedemptionUnits() {
    return Math.max(0, state.units - state.redemptions.filter((item) => item.stage < 3).reduce((sum, item) => sum + item.units, 0));
  }

  function availableRedemptionValue() {
    return Math.floor(openRedemptionUnits() * state.nav * 1000 + 1e-8) / 1000;
  }

  function renderRedemption(redemption) {
    const stages = 4;
    const canAdvance = redemption.stage < stages - 1;
    const stateKey = ["redeemReceived", "redeemPriced", "redeemSettled", "redeemCredited"][redemption.stage];
    return `<article class="order-card"><div class="order-top"><div><strong>${esc(tr("redemptionMode"))} · ${esc(displayReference(redemption.id))}</strong><small>${money(redemption.proceeds)} · ${date(redemption.createdAt)} · ${esc(tr("cutoffValue"))}</small></div><span class="order-amount">${money(redemption.proceeds)}</span></div>${orderStages(redemption, true)}<div class="calc-row"><span>${esc(tr("estimatedProceeds"))} ${sampleTag()}</span><strong>${money(redemption.proceeds)}</strong></div><div class="calc-row"><span>${esc(tr("estimatedGainLoss"))} ${sampleTag()}</span><strong>${money(redemption.pnl)}</strong></div><div class="order-foot"><span>${esc(tr(stateKey))} · ${esc(tr("noPayment"))}</span>${canAdvance ? `<button class="button-quiet button-small" type="button" data-action="advance-redemption" data-id="${esc(redemption.id)}">${esc(tr("advanceRedemption"))} ${icon("arrow", 13)}</button>` : statusChip(tr("redeemCredited"), "success")}</div></article>`;
  }

  function renderRedeem() {
    const availableAmount = availableRedemptionValue();
    const queued = [...state.redemptions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const modeTabs = `<div class="segmented" role="group" aria-label="${esc(tr("redemptionMode"))}"><button type="button" class="segment-button" aria-pressed="${redeemMode === "partial"}" data-action="redeem-mode" data-mode="partial">${esc(tr("partial"))}</button><button type="button" class="segment-button" aria-pressed="${redeemMode === "full"}" data-action="redeem-mode" data-mode="full">${esc(tr("full"))}</button></div>`;
    const defaultAmount = redeemMode === "full" ? availableAmount : Math.min(25, availableAmount);
    return `${viewTitle("redeem")}<div class="page-grid two-col"><div class="page-grid"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("redemptionMode"))}</h2><p class="card-subtitle">${esc(tr("redemptionTermsBody"))}</p></div>${sampleTag()}</div>${modeTabs}<form data-form="redemption" style="margin-top:16px"><div class="form-grid"><div class="form-field"><label for="redemption-amount">${esc(tr("redemptionAmount"))}</label><div class="input-wrap"><span>BHD</span><input id="redemption-amount" name="amount" type="number" min="0.001" step="0.001" max="${availableAmount.toFixed(3)}" value="${number(defaultAmount, 3).replace(/,/g, "")}" inputmode="decimal" aria-invalid="false" ${redeemMode === "full" ? "readonly" : ""} required /></div><small>${esc(tr("availableToRedeem"))}: ${money(availableAmount)}</small><small id="redemption-validation" role="status" hidden>${esc(tr("redemptionAmountError"))}</small></div><div class="form-field"><label>${esc(tr("redemptionEstimate"))}</label><div class="calc-box"><div class="calc-row"><span>${esc(tr("estimatedProceeds"))} ${sampleTag()}</span><strong id="redemption-preview">${money(defaultAmount)}</strong></div><div class="calc-row"><span>${esc(tr("estimatedGainLoss"))} ${sampleTag()}</span><strong id="redemption-pnl-preview">${money(defaultAmount / state.nav * (state.nav - state.averageCost))}</strong></div><div class="calc-row"><span>${esc(tr("redeemCutoff"))}</span><strong>${esc(tr("cutoffValue"))}</strong></div></div></div><div class="form-field full"><div class="panel-callout warning">${icon("warning", 15)}<p><strong>${esc(tr("possibleLoss"))}</strong> ${esc(tr("redemptionTermsBody"))}</p></div></div></div><div class="form-footer"><button id="redemption-submit" class="button-primary" type="submit" ${availableAmount <= 0 ? "disabled" : ""}>${esc(tr("createRedemption"))} ${icon("arrow", 14)}</button></div></form></section><div class="panel-callout warning">${icon("info", 16)}<p>${esc(tr("lossBody"))}</p></div></div><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("redemptionHistory"))}</h2><p class="card-subtitle">${esc(tr("refreshNote"))}</p></div>${sampleTag()}</div>${queued.length ? queued.map(renderRedemption).join("") : `<div class="empty-state"><strong>${esc(tr("noRedemptions"))}</strong>${esc(tr("noRedemptionsBody"))}</div>`}</section></div>`;
  }

  function activityList() {
    let events = state.events.filter((event) => event.key !== "eventRiskChoice");
    if (activityFilter === "orders") events = events.filter((event) => ["order", "redemption"].includes(event.type));
    if (activityFilter === "sharia") events = events.filter((event) => ["sharia", "purification"].includes(event.type));
    return events.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function renderActivity() {
    const events = activityList();
    return `${viewTitle("activity")}<div class="page-grid two-col"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("accountActivity"))}</h2><p class="card-subtitle">${esc(tr("refreshNote"))}</p></div>${sampleTag()}</div><div class="segmented" role="group" aria-label="${esc(tr("activity"))}"><button class="segment-button" type="button" data-action="activity-filter" data-filter="all" aria-pressed="${activityFilter === "all"}">${esc(tr("allActivity"))}</button><button class="segment-button" type="button" data-action="activity-filter" data-filter="orders" aria-pressed="${activityFilter === "orders"}">${esc(tr("ordersFilter"))}</button><button class="segment-button" type="button" data-action="activity-filter" data-filter="sharia" aria-pressed="${activityFilter === "sharia"}">${esc(tr("shariaFilter"))}</button></div><div class="mini-activity" style="margin-top:12px">${events.length ? events.map(eventRow).join("") : `<div class="empty-state"><strong>${esc(tr("activityEmpty"))}</strong>${esc(tr("activityEmptyBody"))}</div>`}</div></section>
      <div class="page-grid"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("docsTitle"))}</h2><p class="card-subtitle">${esc(tr("docsDesc"))}</p></div>${icon("receipt", 18)}</div><div class="receipt-card"><span class="receipt-icon">${icon("download", 18)}</span><h3>${esc(tr("downloadStatement"))}</h3><p>${esc(tr("financialDataWarning"))}</p><button class="button-secondary" type="button" data-action="download-statement">${icon("download", 14)}${esc(tr("downloadStatement"))}</button></div></section>
      <section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("receiptTitle"))}</h2><p class="card-subtitle">${esc(tr("receiptNotPersonal"))}</p></div>${sampleTag()}</div><div class="calc-box"><div class="calc-row"><span>${esc(tr("pooledReceiptId"))}</span><strong>${esc(state.charityTransfers[0]?.receipt || "—")}</strong></div><div class="calc-row"><span>${esc(tr("pooledAmount"))}</span><strong>${money(state.charityTransfers[0]?.amount || 0)}</strong></div></div><p class="micro-label">${esc(tr("noActualTransfer"))}</p><div class="form-footer"><button class="button-quiet" type="button" data-action="download-pool-receipt" ${state.charityTransfers[0] ? "" : "disabled"}>${icon("download", 14)}${esc(tr("downloadPoolReceipt"))}</button></div></section></div></div>`;
  }

  function renderPreferences() {
    return `${viewTitle("preferences")}<div class="page-grid two-col"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("localeTitle"))}</h2><p class="card-subtitle">${esc(tr("localeBody"))}</p></div>${icon("globe", 18)}</div>
      <div class="preference-row"><div><strong>${esc(tr("localeTitle"))}</strong><p>${esc(locale === "ar" ? tr("localeArabic") : tr("localeEnglish"))}</p></div><div class="locale-switch"><button class="locale-button" type="button" data-action="locale" data-locale="en" aria-pressed="${locale === "en"}">${esc(tr("langEnglishShort"))}</button><button class="locale-button" type="button" data-action="locale" data-locale="ar" aria-pressed="${locale === "ar"}">${esc(tr("langArabicShort"))}</button></div></div>
      <div class="preference-row"><div><strong>${esc(tr("feedbackTitle"))}</strong><p>${esc(tr("feedbackBody"))}</p></div><button class="button-quiet button-small" type="button" data-action="toggle-feedback" aria-pressed="${feedbackEnabled}">${esc(tr(feedbackEnabled ? "feedbackOn" : "feedbackOff"))}</button></div>
      <div class="preference-row"><div><strong>${esc(tr("localStorageTitle"))}</strong><p>${esc(tr("localStorageBody"))}</p></div><span class="status-chip success"><span class="status-dot"></span>${esc(tr("demoOnly"))}</span></div><div class="preference-row"><div><strong>${esc(tr("profileState"))}</strong><p>${esc(state.profile ? tr("profileSavedBody") : tr("welcomeProfileBody"))}</p></div>${routeButton("profile", tr("profileAction"), "button-quiet button-small")}</div><div class="preference-row"><div><strong>${esc(tr("resetTitle"))}</strong><p>${esc(tr("preferencesCaution"))}</p></div><button class="button-danger button-small" type="button" data-action="confirm-reset">${esc(tr("resetDemo"))}</button></div></section>
      <div class="page-grid"><section class="card card-pad"><div class="card-header"><div><h2 class="card-title">${esc(tr("approvalTitle"))}</h2><p class="card-subtitle">${esc(tr("notFinal"))}</p></div>${sampleTag()}</div><div class="disclosure-list"><div class="disclosure-item"><strong>${esc(tr("approvalTitle"))}</strong><p>${esc(tr("approvalBody"))}</p></div><div class="disclosure-item"><strong>${esc(tr("financialDataWarning"))}</strong><p>${esc(tr("demoNoticeBody"))}</p></div><div class="disclosure-item"><strong>${esc(tr("noIdentity"))}</strong><p>${esc(tr("noIdentityNote"))}</p></div></div></section><div class="panel-callout">${icon("lock", 16)}<p>${esc(tr("localStorageBody"))}</p></div></div></div>`;
  }

  function renderView() {
    switch (route) {
      case "overview": return renderOverview();
      case "portfolio": return renderPortfolio();
      case "more": return renderMore();
      case "explore": return renderExplore();
      case "compare": return renderCompare();
      case "market": return renderMarket();
      case "profile": return renderProfile();
      case "invest": return renderInvest();
      case "sharia": return renderSharia();
      case "purification": return renderPurification();
      case "redeem": return renderRedeem();
      case "activity": return renderActivity();
      case "giving": return renderGiving();
      case "preferences": return renderPreferences();
      default: return renderOverview();
    }
  }

  function openHoldingDetail(ticker) {
    const holding = holdings.find((item) => item.ticker === ticker);
    if (!holding) return;
    const status = statusForHolding(holding);
    const scenarioHistory = state.scenarioRun && ticker === SCENARIO_TICKER
      ? `<div class="history-list">${historyEntry(tr("originalRecord"), `4.7% · ${tr("publishedDate")} 15 Aug 2026 · ${tr("screened")}`, "2026-08-15", "success")}${historyEntry(tr("eventScenarioRestatement"), `6.2% · ${tr("discoveredDate")} 30 Sep 2026 · ${tr("correctedRecord")}`, "2026-09-30", "warning")}${historyEntry(tr("eventScenarioBlock"), tr("stopAllocation"), "2026-09-30", "warning")}${historyEntry(tr("eventScenarioReviewOutcome"), tr("scenarioOutcomeDetail"), "2026-10-01", "warning")}${historyEntry(tr("eventScenarioDisposal"), tr("scenarioDisposalDetail"), "2026-10-01", "warning")}${historyEntry(tr("eventScenarioIncome"), `${tr("correctionId")}: CORR-SAMPLE-026 · ${tr("scenarioLink")}: PUR-SAMPLE-CORR-026`, "2026-10-01")}${historyEntry(tr("eventScenarioTransfer"), `${tr("pooledReceiptId")}: ${SCENARIO_TRANSFER.receipt} · ${money(SCENARIO_TRANSFER.amount)}`, "2026-10-02", "success")}</div>`
      : `<div class="history-list">${historyEntry(tr("eventScreening"), `${tr("screened")} · ${tr("screenMethod")}`, holding.reviewDate, "success")}${historyEntry(tr("sourceName"), `${tr("sourceVintage")}: ${holding.vintage}`, holding.sourceDate, "")}</div>`;
    const body = `<div class="page-grid"><div class="calc-box"><div class="calc-row"><span>${esc(tr("holding"))}</span><strong>${esc(holding.name)} · ${esc(holding.ticker)} ${sampleTag()}</strong></div><div class="calc-row"><span>${esc(tr("currentSampleStatus"))}</span><strong>${statusForHoldingChip(status)}</strong></div><div class="calc-row"><span>${esc(tr("reviewDate"))}</span><strong>${date(state.scenarioRun && ticker === SCENARIO_TICKER ? "2026-09-30" : holding.reviewDate)}</strong></div><div class="calc-row"><span>${esc(tr("sourceVintage"))}</span><strong>${esc(holding.vintage)} ${sampleTag()}</strong></div><div class="calc-row"><span>${esc(tr("sourceLabel"))}</span><strong>${esc(tr("sourceName"))}</strong></div></div><div class="disclosure-item"><strong>${esc(tr("screenMethod"))}</strong><p>${esc(tr("screenMethodBody"))}</p></div><div class="disclosure-item"><strong>${esc(tr("decisionRecord"))}</strong><p>${esc(status === "review" ? tr("reviewNeeded") : tr("screened"))} · ${esc(tr("sampleApproval"))}: ${esc(tr("proposedReview"))}.</p></div><div class="card card-pad"><div class="card-header"><div><h3 class="card-title">${esc(tr("reviewTrail"))}</h3><p class="card-subtitle">${esc(tr("statusDisclaimer"))}</p></div>${sampleTag()}</div>${scenarioHistory}</div><div class="panel-callout warning">${icon("info", 16)}<p>${esc(tr("screeningDisclosureBody"))} ${esc(tr("noLiveData"))}</p></div>${state.scenarioRun && ticker === SCENARIO_TICKER ? `<button type="button" class="button-secondary" data-action="navigate" data-route="purification">${esc(tr("scenarioLink"))} · ${esc(tr("purification"))} ${icon("arrow", 13)}</button>` : ""}</div>`;
    openModal(tr("holdingDetail"), `${holding.ticker} · ${tr("statusDisclaimer")}`, body);
  }

  function runScenario() {
    if (state.scenarioRun) {
      toast(tr("scenarioAlreadyDone"), "warning");
      return;
    }
    state.scenarioRun = true;
    const correction = {
      id: "PUR-SAMPLE-CORR-026", kind: "correction", period: "2026 Q2 · restatement", customerAmount: SCENARIO_TRANSFER.customerAllocation, poolAmount: 0.450,
      factor: "Sample reconstructed income factor v0.5", status: "calculated", date: "2026-10-01", receipt: null
    };
    const transferEntry = {
      id: "PUR-SAMPLE-POOL-026", kind: "transfer", period: "2026 Q2 · correction", customerAmount: SCENARIO_TRANSFER.customerAllocation,
      poolAmount: SCENARIO_TRANSFER.amount, factor: "Sample approved pooled transfer v0.5", status: "remitted", date: SCENARIO_TRANSFER.date, receipt: SCENARIO_TRANSFER.receipt
    };
    state.purification.unshift(transferEntry, correction);
    state.charityTransfers.unshift({ id: SCENARIO_TRANSFER.id, receipt: SCENARIO_TRANSFER.receipt, amount: SCENARIO_TRANSFER.amount, customerAllocation: SCENARIO_TRANSFER.customerAllocation, date: SCENARIO_TRANSFER.date, status: "remitted" });
    addEvent("eventScenarioRestatement", `ASMC · ${tr("originalRecord")} 4.7% → ${tr("correctedRecord")} 6.2% · CORR-SAMPLE-026`, "sharia", null, "2026-09-30T08:00:00.000Z");
    addEvent("eventScenarioBlock", "ASMC · sample allocations paused pending proposed review", "sharia", null, "2026-09-30T09:00:00.000Z");
    addEvent("eventScenarioIncome", `PUR-SAMPLE-CORR-026 · ${money(.450)} pooled sample income reconstructed`, "purification", .450, "2026-10-01T09:00:00.000Z");
    addEvent("eventScenarioReviewOutcome", "ASMC · review remains pending under proposed governance", "sharia", null, "2026-10-01T10:00:00.000Z");
    addEvent("eventScenarioDisposal", "ASMC · simulated disposal step recorded; no actual trade occurred", "sharia", null, "2026-10-01T15:00:00.000Z");
    addEvent("eventScenarioTransfer", `${SCENARIO_TRANSFER.receipt} · ${money(SCENARIO_TRANSFER.amount)} pooled sample record`, "purification", SCENARIO_TRANSFER.amount, `${SCENARIO_TRANSFER.date}T10:00:00.000Z`);
    save();
    render();
    toast(tr("scenarioDone"));
  }

  function downloadFile(filename, content, mimeType = "text/plain;charset=utf-8") {
    const blob = new Blob(["\ufeff", content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1200);
    toast(tr("downloadDone"));
  }

  function downloadStatement() {
    const net = sampleNetGainLoss();
    const rows = [
      ["AMANAH · ACCOUNT STATEMENT · ILLUSTRATIVE"],
      ["NOT A LIVE BANK STATEMENT OR INVESTMENT ADVICE"],
      ["All figures, holdings, prices, dates, costs and statuses below are illustrative."],
      ["No actual order, payment, transfer, donation, custody or redemption has taken place."],
      [], ["Metric", "Sample value"],
      ["Portfolio value (BHD)", (state.units * state.nav).toFixed(3)], ["Gain / loss (BHD)", net.toFixed(3)], ["Available cash (BHD)", state.cashBhd.toFixed(3)],
      [], ["Recent activity", "Date", "Type", "Illustrative amount BHD"],
      ...state.events.filter((event) => event.key !== "eventRiskChoice").slice(0, 20).map((event) => [tr(event.key), new Date(event.date).toISOString().slice(0, 10), event.type, event.amount == null ? "" : Number(event.amount).toFixed(3)]),
      [], ["Customer identity or bank account details were not collected."]
    ];
    downloadFile("amanah-account-statement.csv", rows.map((row) => row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n"), "text/csv;charset=utf-8");
  }

  function downloadPoolReceipt() {
    const receipt = state.charityTransfers[0];
    if (!receipt) {
      toast(tr("noLedger"), "warning");
      return;
    }
    const body = [
      "AMANAH US CONCEPT DEMO — POOLED TRANSFER RECORD",
      "SYNTHETIC SAMPLE — NOT A BANK RECEIPT OR PROOF OF A REAL CHARITABLE TRANSFER",
      "No actual transfer, donation, payment or charity has occurred.",
      "",
      `Pooled sample reference: ${receipt.receipt}`,
      `Illustrative pooled amount (BHD): ${Number(receipt.amount).toFixed(3)}`,
      `Illustrative sample date: ${receipt.date}`,
      `Customer allocation for reconciliation only (BHD): ${Number(receipt.customerAllocation).toFixed(3)}`,
      "The customer allocation is not a separate payment or individual bank receipt.",
      "Any approval displayed in the interface is illustrative only; no approval is established."
    ].join("\r\n");
    downloadFile("amanah-us-sample-pooled-transfer.txt", body);
  }

  function makeSubscription(amount) {
    const costRate = 0;
    const estimatedUnits = amount * (1 - costRate) / state.nav;
    const order = { id: `BUY-DEMO-${String(Date.now()).slice(-6)}`, amount, costRate, units: estimatedUnits, nav: state.nav, stage: 0, createdAt: nowIso(), seeded: false };
    state.orders.unshift(order);
    addEvent("eventOrderReceived", `${order.id} · ${money(amount)} requested`, "order", amount);
    save();
    investMode = "once";
    render();
    toast(tr("orderReceived"));
  }

  function advanceOrder(id) {
    const order = state.orders.find((item) => item.id === id);
    if (!order || order.stage >= 2) return;
    if (order.stage === 0) {
      order.stage = 1;
      order.nav = state.nav;
      order.units = order.amount * (1 - order.costRate) / order.nav;
      addEvent("eventOrderPriced", `${order.id} · ${tr("investedValue")} ${money(order.amount * (1 - order.costRate))}`, "order", order.amount);
      toast(tr("orderPriced"));
    } else {
      const previousUnits = state.units;
      state.averageCost = (previousUnits * state.averageCost + order.units * order.nav) / (previousUnits + order.units);
      state.units += order.units;
      order.stage = 2;
      addEvent("eventOrderSettled", `${order.id} · ${tr("contribution")} ${money(order.amount)}`, "order", order.amount);
      toast(tr("orderSettled"));
    }
    save();
    render();
  }

  function changeRecurring(id, status) {
    const item = state.recurring.find((entry) => entry.id === id);
    if (!item || item.status === "cancelled") return;
    item.status = status;
    const key = status === "paused" ? "eventRecurringPaused" : status === "active" ? "eventRecurringResumed" : "eventRecurringCancelled";
    addEvent(key, `${item.id} · ${money(item.amount)} / ${item.frequency}`, "order", item.amount);
    save();
    render();
    toast(tr(key));
  }

  function advanceRedemption(id) {
    const redemption = state.redemptions.find((item) => item.id === id);
    if (!redemption || redemption.stage >= 3) return;
    if (redemption.stage === 0) {
      redemption.stage = 1;
      redemption.nav = state.nav;
      redemption.proceeds = redemption.units * redemption.nav;
      redemption.pnl = redemption.units * (redemption.nav - state.averageCost);
      addEvent("eventRedemptionPriced", `${redemption.id} · ${tr("estimatedProceeds")} ${money(redemption.proceeds)}`, "redemption", redemption.proceeds);
      toast(tr("redeemPriced"));
    } else if (redemption.stage === 1) {
      redemption.stage = 2;
      addEvent("eventRedemptionSettled", `${redemption.id} · ${tr("redeemSettled")}`, "redemption", redemption.proceeds);
      toast(tr("redeemSettled"));
    } else {
      state.units = Math.max(0, state.units - redemption.units);
      state.cashBhd += redemption.proceeds;
      redemption.stage = 3;
      addEvent("eventRedemptionCredited", `${redemption.id} · demo cash ledger updated; no bank transfer`, "redemption", redemption.proceeds);
      toast(tr("redeemCredited"));
    }
    save();
    render();
  }

  function submitForm(event) {
    const form = event.target.closest("form[data-form]");
    if (!form) return;
    event.preventDefault();
    const formData = new FormData(form);
    const kind = form.dataset.form;
    if (kind === "subscription") {
      const amount = Number(formData.get("amount"));
      const amountInput = form.elements.namedItem("amount");
      if (!Number.isFinite(amount) || amount < 25 || amountInput?.validity.stepMismatch) return toast(tr("amountError"), "warning");
      return makeSubscription(amount);
    }
    if (kind === "recurring") {
      const amount = Number(formData.get("amount"));
      const amountInput = form.elements.namedItem("amount");
      if (!Number.isFinite(amount) || amount < 25 || amountInput?.validity.stepMismatch) return toast(tr("amountError"), "warning");
      const instruction = { id: `REC-DEMO-${String(Date.now()).slice(-6)}`, amount, frequency: String(formData.get("frequency") || "Monthly"), status: "active", nextDate: "2026-11-02", createdAt: nowIso() };
      state.recurring.unshift(instruction);
      addEvent("eventRecurringCreated", `${instruction.id} · ${money(amount)} monthly sample instruction`, "order", amount);
      investMode = "recurring";
      save();
      render();
      toast(tr("eventRecurringCreated"));
      return;
    }
    if (kind === "redemption") {
      const amount = Number(formData.get("amount"));
      const available = availableRedemptionValue();
      const amountInput = form.elements.namedItem("amount");
      if (!Number.isFinite(amount) || amount <= 0 || amount > available || amountInput?.validity.stepMismatch) return toast(tr("redemptionAmountError"), "warning");
      const units = amount / state.nav;
      const request = { id: `RED-DEMO-${String(Date.now()).slice(-6)}`, units, nav: state.nav, proceeds: units * state.nav, pnl: units * (state.nav - state.averageCost), stage: 0, createdAt: nowIso(), mode: redeemMode };
      state.redemptions.unshift(request);
      addEvent("eventRedemptionReceived", `${request.id} · ${tr("redemptionAmount")} ${money(request.proceeds)}`, "redemption", request.proceeds);
      save();
      render();
      toast(tr("redeemReceived"));
      return;
    }
    if (kind === "suitability") {
      const ack = formData.get("riskAck") === "on";
      if (!ack) return toast(tr("acknowledgeError"), "warning");
      state.profile = { horizon: formData.get("horizon"), lossResponse: formData.get("lossResponse"), liquidity: formData.get("liquidity"), amountPlan: Number(formData.get("amountPlan")) || 0, riskAck: ack, savedAt: nowIso() };
      addEvent("eventProfile", tr("profileSavedBody"), "profile", null);
      save();
      render();
      toast(tr("profileSaved"));
      return;
    }
    if (kind === "zakat") {
      const numericFields = ["cash", "bank", "investments", "gold", "silver", "other", "liabilities", "goldThreshold", "silverThreshold"];
      const zakat = Object.fromEntries(numericFields.map((key) => [key, Math.max(0, Number(formData.get(key)) || 0)]));
      zakat.nisabMethod = formData.get("nisabMethod") === "silver" ? "silver" : "gold";
      zakat.lunarYear = formData.get("lunarYear") === "on";
      state.zakat = zakat;
      save();
      render();
      toast(tr("calculate"));
      return;
    }
    if (kind === "charity") {
      const percent = Number(formData.get("percent"));
      const percentInput = form.elements.namedItem("percent");
      if (!Number.isFinite(percent) || percent < 0 || percent > 100 || percentInput?.validity.stepMismatch) return toast(tr("profitPercentage"), "warning");
      state.givingPercent = percent;
      addEvent("eventGivingChoice", `${number(percent, 1)}% of positive realised sample profit · optional only`, "general");
      save();
      render();
      toast(tr("givingSaved"));
    }
  }

  function refreshEstimate(event) {
    if (route === "invest" && investMode === "once") {
      const amount = Number(document.getElementById("sub-amount")?.value) || 0;
      const node = document.getElementById("estimated-invest-preview");
      if (node) node.textContent = money(amount);
    }
    if (route === "redeem") {
      const input = document.getElementById("redemption-amount");
      const amount = Number(input?.value) || 0;
      const proceeds = document.getElementById("redemption-preview");
      const pnl = document.getElementById("redemption-pnl-preview");
      const available = availableRedemptionValue();
      const valid = Number.isFinite(amount) && amount > 0 && amount <= available && !input?.validity.stepMismatch;
      const submit = document.getElementById("redemption-submit");
      const validation = document.getElementById("redemption-validation");
      if (input) input.setAttribute("aria-invalid", String(Boolean(input.value) && !valid));
      if (submit) submit.disabled = !valid;
      if (validation) validation.hidden = !input?.value || valid;
      if (proceeds) proceeds.textContent = money(amount);
      if (pnl) pnl.textContent = money(amount / state.nav * (state.nav - state.averageCost));
    }
    if (route === "giving") {
      const form = event.target.closest?.('form[data-form="zakat"]');
      if (form) {
        const values = new FormData(form);
        const fieldNames = ["cash", "bank", "investments", "gold", "silver", "other", "liabilities", "goldThreshold", "silverThreshold"];
        const preview = Object.fromEntries(fieldNames.map((key) => [key, Math.max(0, Number(values.get(key)) || 0)]));
        preview.nisabMethod = values.get("nisabMethod") === "silver" ? "silver" : "gold";
        preview.lunarYear = values.get("lunarYear") === "on";
        const result = zakatResult(preview);
        const resultBox = document.getElementById("zakat-result");
        if (resultBox) {
          resultBox.classList.toggle("success", result.eligible);
          resultBox.classList.toggle("warning", !result.eligible);
        }
        const label = document.getElementById("zakat-result-label");
        const due = document.getElementById("zakat-due");
        const net = document.getElementById("zakat-net");
        const threshold = document.getElementById("zakat-threshold");
        if (label) label.textContent = tr(result.eligible ? "zakatDue" : "zakatBelow");
        if (due) due.textContent = money(result.due);
        if (net) net.textContent = money(result.net);
        if (threshold) threshold.textContent = money(result.threshold);
      }
      const charityForm = event.target.closest?.('form[data-form="charity"]');
      if (charityForm) {
        const percent = Math.min(100, Math.max(0, Number(new FormData(charityForm).get("percent")) || 0));
        const totals = performanceTotals();
        const profit = Math.max(0, totals.realizedGain + totals.realizedLoss);
        const eligible = document.getElementById("charity-eligible-profit");
        const optional = document.getElementById("charity-optional-amount");
        if (eligible) eligible.textContent = money(profit);
        if (optional) optional.textContent = money(profit * percent / 100);
      }
    }
  }

  function resetDemo() {
    state = seed();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("amanah-us-demo-v1");
    route = "overview";
    investMode = "once";
    redeemMode = "partial";
    activityFilter = "all";
    closeModal();
    render();
    resetViewScroll();
    toast(tr("resetDone"));
  }

  function resetViewScroll() {
    const reset = () => {
      const main = document.querySelector(".main-area");
      if (main) {
        main.scrollTop = 0;
        main.scrollLeft = 0;
      }
      window.scrollTo(0, 0);
    };
    reset();
    requestAnimationFrame(reset);
  }

  app.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    if (action === "navigate") {
      route = button.dataset.route || "overview";
      document.getElementById("sidebar")?.classList.remove("open");
      render();
      resetViewScroll();
    } else if (action === "locale") {
      locale = button.dataset.locale === "ar" ? "ar" : "en";
      localStorage.setItem(LOCALE_KEY, locale);
      render();
    } else if (action === "toggle-feedback") {
      feedbackEnabled = !feedbackEnabled;
      localStorage.setItem(FEEDBACK_KEY, feedbackEnabled ? "on" : "off");
      render();
    } else if (action === "toggle-menu") {
      document.getElementById("sidebar")?.classList.toggle("open");
    } else if (action === "invest-mode") {
      investMode = button.dataset.mode === "recurring" ? "recurring" : "once";
      render();
    } else if (action === "redeem-mode") {
      redeemMode = button.dataset.mode === "full" ? "full" : "partial";
      render();
    } else if (action === "activity-filter") {
      activityFilter = button.dataset.filter || "all";
      render();
    } else if (action === "explore-filter") {
      exploreFilter = button.dataset.filter || "all";
      render();
    } else if (action === "compare-period") {
      const period = button.dataset.period;
      if (SPUS_BENCHMARK.returns.some((item) => item.label === period)) {
        comparePeriod = period;
        render();
      }
    } else if (action === "holding-detail") {
      openHoldingDetail(button.dataset.ticker);
    } else if (action === "run-scenario") {
      runScenario();
    } else if (action === "advance-order") {
      advanceOrder(button.dataset.id);
    } else if (action === "advance-redemption") {
      advanceRedemption(button.dataset.id);
    } else if (action === "recurring-pause") {
      changeRecurring(button.dataset.id, "paused");
    } else if (action === "recurring-resume") {
      changeRecurring(button.dataset.id, "active");
    } else if (action === "recurring-cancel") {
      changeRecurring(button.dataset.id, "cancelled");
    } else if (action === "download-statement") {
      downloadStatement();
    } else if (action === "download-pool-receipt") {
      downloadPoolReceipt();
    } else if (action === "confirm-reset") {
      const body = `<p>${esc(tr("resetBody"))}</p><div class="panel-callout warning">${icon("warning", 16)}<p>${esc(tr("preferencesCaution"))}</p></div><div class="form-footer"><button class="button-quiet" type="button" data-action="close-modal">${esc(tr("cancelAction"))}</button><button class="button-danger" type="button" data-action="reset-demo-data">${esc(tr("resetDemo"))}</button></div>`;
      openModal(tr("resetTitle"), tr("demoNoticeTitle"), body);
    } else if (action === "reset-demo-data") {
      resetDemo();
    } else if (action === "close-modal" || (action === "backdrop" && event.target === button)) {
      closeModal();
    }
  });

  app.addEventListener("submit", submitForm);
  app.addEventListener("input", refreshEstimate);
  modalRoot.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    if (button.dataset.action === "close-modal" || (button.dataset.action === "backdrop" && event.target === button)) closeModal();
    if (button.dataset.action === "reset-demo-data") resetDemo();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalRoot.firstElementChild) closeModal();
  });

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  render();
  resetViewScroll();
})();
