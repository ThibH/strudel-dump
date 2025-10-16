/**
 * Audio Effects Utilities for Strudel
 * Collection of custom effects and audio processing functions
 */

// Trance Gate Effect
// Creates a rhythmic gating pattern with random density
// @param {number} density - Gate density (0-1, higher = more gates)
// @param {number} seed - Random seed for reproducible patterns
// @param {number} length - Pattern length
// @param {Pattern} x - Input audio pattern
register('trancegate', (density, seed, length, x) => {
    return x.struct(rand.mul(density).round().seg(16).rib(seed, length)).fill().clip(.7)
})

// Add more effects here as you develop them...