'use client';

const ProjectCTA: React.FC = () => {
  return (
    <div className="mt-24 text-center">
      <div className="relative glass rounded-4xl p-12 border border-[var(--border-color)]/50 max-w-5xl mx-auto backdrop-blur-xl bg-gradient-to-br from-[var(--primary-bg)]/90 to-[var(--secondary-bg)]/90 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-[var(--primary-color)]/30 to-[var(--secondary-color)]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--primary-color)]/20 to-[var(--secondary-color)]/20 rounded-2xl flex items-center justify-center text-4xl border border-[var(--border-color)]/30 animate-bounce">
              🚀
            </div>
          </div>

          {/* Heading */}
          <h3 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent animate-glow">
              Extraordinary
            </span>
            ?
          </h3>

          {/* Subheading */}
          <p className="text-[var(--text-secondary)] text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
            I&apos;m passionate about transforming innovative ideas into powerful digital solutions. 
            Let&apos;s collaborate and create something that makes a real impact in the world!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">50+</div>
              <div className="text-[var(--text-secondary)] text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--secondary-color)] mb-2">99%</div>
              <div className="text-[var(--text-secondary)] text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
              <div className="text-[var(--text-secondary)] text-sm">Support Available</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="group relative bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] hover:from-[var(--primary-color)]/80 hover:to-[var(--secondary-color)]/80 text-white font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[var(--glow-primary)]/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>🚀</span>
                <span>Start Your Project</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="https://github.com/ripassorkerrifat"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass border-2 border-[var(--border-color)]/50 hover:border-[var(--secondary-color)]/80 text-[var(--text-primary)] hover:text-[var(--secondary-color)] font-bold py-5 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[var(--glow-secondary)]/30 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>💻</span>
                <span>Explore My Work</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-10 pt-8 border-t border-[var(--border-color)]/30">
            <p className="text-[var(--text-secondary)] text-sm">
              💬 Have questions? Let&apos;s discuss your project over a coffee (virtual or real!)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;
