export interface AnalyticsEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

class Analytics {
    private isInitialized = false;

    init() {
        if (typeof window !== 'undefined' && window.gtag) {
            this.isInitialized = true;
        }
    }

    trackEvent({ action, category, label, value }: AnalyticsEvent) {
        if (!this.isInitialized || typeof window === 'undefined') return;

        try {
            window.gtag?.('event', action, {
                event_category: category,
                event_label: label,
                value: value,
            });
        } catch (error) {
            console.error('Analytics tracking error:', error);
        }
    }

    trackPageView(url: string, title?: string) {
        if (!this.isInitialized || typeof window === 'undefined') return;

        try {
            window.gtag?.('config', 'G-R3G75SPYHW', {
                page_path: url,
                page_title: title,
            });
        } catch (error) {
            console.error('Page view tracking error:', error);
        }
    }

    // Conversion tracking
    trackConversion(conversionId: string, value?: number) {
        if (!this.isInitialized || typeof window === 'undefined') return;

        try {
            window.gtag?.('event', 'conversion', {
                send_to: conversionId,
                value: value,
            });
        } catch (error) {
            console.error('Conversion tracking error:', error);
        }
    }

    // Form submission tracking
    trackFormSubmit(formName: string) {
        this.trackEvent({
            action: 'form_submit',
            category: 'Forms',
            label: formName,
        });
    }

    // Button click tracking
    trackButtonClick(buttonName: string, location?: string) {
        this.trackEvent({
            action: 'button_click',
            category: 'Engagement',
            label: `${buttonName}${location ? ` - ${location}` : ''}`,
        });
    }

    // Video play tracking
    trackVideoPlay(videoTitle: string) {
        this.trackEvent({
            action: 'video_play',
            category: 'Media',
            label: videoTitle,
        });
    }

    // Scroll depth tracking
    trackScrollDepth(depth: number) {
        this.trackEvent({
            action: 'scroll_depth',
            category: 'Engagement',
            label: `${depth}%`,
            value: depth,
        });
    }

    // Outbound link tracking
    trackOutboundLink(url: string) {
        this.trackEvent({
            action: 'outbound_link',
            category: 'Navigation',
            label: url,
        });
    }
}

// Extend Window interface for gtag
declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string | Date,
            config?: Record<string, any>
        ) => void;
    }
}

export const analytics = new Analytics();
