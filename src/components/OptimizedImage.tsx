import { ImgHTMLAttributes, useState } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    sizes?: string;
    imgClassName?: string;
}

export const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    priority = false,
    sizes,
    className,
    imgClassName,
    ...props
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
    };

    return (
        <div className={`relative ${className || ''}`} style={{ width, height }}>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                sizes={sizes}
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName || ''}`}
                {...props}
            />
            {!isLoaded && !hasError && (
                <div
                    className="absolute inset-0 bg-muted animate-pulse"
                    aria-hidden="true"
                />
            )}
            {hasError && (
                <div
                    className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground"
                    aria-label="Image failed to load"
                >
                    <span>Image unavailable</span>
                </div>
            )}
        </div>
    );
};
