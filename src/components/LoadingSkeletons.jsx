import React from 'react';

export const PageSkeleton = () => (
  <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 animate-pulse" role="status" aria-label="Loading page content">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-4 w-24 bg-white/5 rounded-full mx-auto mb-4"></div>
        <div className="h-12 w-80 bg-white/5 rounded-2xl mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-white/5 rounded-full mx-auto max-w-full"></div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
            <div className="h-44 bg-white/5"></div>
            <div className="p-6 space-y-3">
              <div className="h-5 w-3/4 bg-white/5 rounded-lg"></div>
              <div className="h-3 w-full bg-white/5 rounded-lg"></div>
              <div className="h-3 w-2/3 bg-white/5 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

export const SceneSkeleton = () => (
  <div className="w-full h-[700px] rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center animate-pulse" role="status" aria-label="Loading 3D scene">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500 text-sm font-medium">Loading 3D Campus...</p>
    </div>
    <span className="sr-only">Loading 3D scene...</span>
  </div>
);

export const ChartSkeleton = () => (
  <div className="glass-card p-8 rounded-2xl border border-white/5 animate-pulse" role="status" aria-label="Loading chart">
    <div className="h-5 w-40 bg-white/5 rounded-lg mb-2"></div>
    <div className="h-3 w-56 bg-white/5 rounded-lg mb-6"></div>
    <div className="h-[280px] bg-white/5 rounded-xl flex items-end justify-center gap-3 p-6">
      {[40, 65, 50, 80, 55, 70].map((h, i) => (
        <div key={i} className="w-8 bg-white/5 rounded-t-md" style={{ height: `${h}%` }}></div>
      ))}
    </div>
    <span className="sr-only">Loading chart...</span>
  </div>
);

export const Spinner = () => (
  <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500 text-sm font-medium">Loading...</p>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);
