import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Code2, Zap, Box, Cpu, ChevronDown, Brain, Lock, Workflow, Terminal, RefreshCw, Gauge, Rocket } from 'lucide-react';
import { CodeEditor } from './components/CodeEditor';

const features = [
  {
    icon: <Zap className="feature-icon" />,
    title: "Smart Transpilation",
    description: "Automatically convert performance-critical TypeScript code to optimized Rust implementations with zero overhead."
  },
  {
    icon: <Box className="feature-icon" />,
    title: "State Management",
    description: "Seamless state synchronization between TypeScript frontend and Rust backend with automatic memory management."
  },
  {
    icon: <Cpu className="feature-icon" />,
    title: "WASM Integration",
    description: "Native-like performance through WebAssembly compilation with automatic optimization and threading support."
  },
  {
    icon: <Brain className="feature-icon" />,
    title: "Smart Optimization",
    description: "Intelligent code analysis for automatic parallelization and memory optimization in critical paths."
  },
  {
    icon: <Lock className="feature-icon" />,
    title: "Type Safety",
    description: "End-to-end type safety from TypeScript through Rust to WebAssembly with zero runtime overhead."
  },
  {
    icon: <Workflow className="feature-icon" />,
    title: "Developer Experience",
    description: "Seamless integration with existing tooling, hot reload support, and detailed performance insights."
  },
  {
    icon: <Terminal className="feature-icon" />,
    title: "Zero Config Setup",
    description: "Get started in minutes with zero configuration. TRust automatically detects and optimizes performance-critical code."
  },
  {
    icon: <RefreshCw className="feature-icon" />,
    title: "Hot Reload Support",
    description: "Instant feedback during development with hot module replacement for both TypeScript and Rust code."
  }
];

const useCases = [
  {
    title: "Data Processing",
    description: "High-performance data transformation and analysis with automatic parallelization.",
    icon: <RefreshCw className="w-6 h-6 text-primary mb-4" />,
    code: `@trust.compute
processData(items: DataItem[]): ProcessedResult[] {
  return items
    .filter(item => item.value > threshold)
    .map(item => transform(item))
    .sort(compareItems);
}`
  },
  {
    title: "Game Development",
    description: "Complex game state management and physics calculations in Rust.",
    icon: <Gauge className="w-6 h-6 text-secondary mb-4" />,
    code: `@trust.state
class GameEngine {
  @rust.compute
  updatePhysics(delta: number) {
    this.entities.forEach(entity => {
      entity.position = calculateNewPosition(entity, delta);
      handleCollisions(entity, this.world);
    });
  }
}`
  },
  {
    title: "Real-time Analytics",
    description: "Process and analyze large datasets with native performance.",
    icon: <Rocket className="w-6 h-6 text-green-500 mb-4" />,
    code: `@trust.worker
class AnalyticsEngine {
  @rust.parallel
  aggregateMetrics(events: Event[]): Metrics {
    return events
      .groupBy(event => event.type)
      .map(group => calculateStats(group))
      .reduce(combineMetrics);
  }
}`
  },
  {
    title: "Machine Learning",
    description: "Run complex ML algorithms with native performance using Rust's parallel processing capabilities.",
    icon: <Brain className="w-6 h-6 text-primary mb-4" />,
    code: `@trust.worker
class MLProcessor {
  @rust.parallel
  trainModel(dataset: TrainingData[]): Model {
    return dataset
      .partition(4)
      .map(batch => processBatch(batch))
      .reduce(mergeResults);
  }
}`
  }
];

const faqs = [
  {
    question: "How does TRust optimize my TypeScript code?",
    answer: "TRust analyzes your TypeScript code, identifies performance-critical sections marked with decorators, and automatically generates optimized Rust code. This code is then compiled to WebAssembly, providing near-native performance while maintaining type safety and developer experience."
  },
  {
    question: "Do I need Rust knowledge to use TRust?",
    answer: "No! TRust handles all Rust code generation automatically. You continue writing TypeScript as usual, using our decorators to mark code for optimization. The bridge between TypeScript and Rust is completely transparent."
  },
  {
    question: "What performance improvements can I expect?",
    answer: "Performance gains vary by use case, but CPU-intensive operations typically see 2-10x speedups when compiled to Rust/WASM. Data processing, complex calculations, and state management particularly benefit from TRust's optimizations."
  },
  {
    question: "Can I use TRust with my existing framework?",
    answer: "Yes! TRust is framework-agnostic and works seamlessly with React, Vue, Angular, and other JavaScript frameworks. We provide specific integrations and examples for popular frameworks to get you started quickly."
  },
  {
    question: "How does state synchronization work?",
    answer: "TRust maintains a synchronized state between TypeScript and Rust using a zero-copy bridge. Changes in either language are automatically reflected in the other with minimal overhead."
  },
  {
    question: "What's the deployment process like?",
    answer: "TRust integrates with your existing build pipeline. During production builds, it automatically compiles marked code to Rust, generates WASM, and bundles everything together."
  }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen">
      <div className="light-rays fixed inset-0 pointer-events-none"></div>

      {/* SVG Background Pattern */}
      <div className="svg-background">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Navbar */}
      <nav className="navbar glass">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            <span className="font-bold text-sm">TRust</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="nav-link hover:text-primary">Features</a>
            <a href="#use-cases" className="nav-link hover:text-primary">Use Cases</a>
            <a href="#docs" className="nav-link hover:text-primary">Documentation</a>
            <a href="#faq" className="nav-link hover:text-primary">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-1.5 hover:text-primary transition-colors">
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="https://github.com/blackdoyen/trust" target="_blank" rel="noopener noreferrer" 
               className="p-1.5 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1.5">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20">
          <div className="glass h-full px-4 py-6">
            <div className="flex flex-col gap-4 text-center">
              <a href="#features" className="nav-link hover:text-primary">Features</a>
              <a href="#use-cases" className="nav-link hover:text-primary">Use Cases</a>
              <a href="#docs" className="nav-link hover:text-primary">Documentation</a>
              <a href="#faq" className="nav-link hover:text-primary">FAQ</a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="glass p-2 rounded-full float-animation">
              <Code2 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
            <span className="gradient-text">TRust</span>
            <br />
            <span className="text-2xl md:text-4xl mt-2 block">TypeScript-to-Rust Performance Bridge</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 slide-up" style={{animationDelay: '0.2s'}}>
            Write in TypeScript, automatically compile performance-critical code to Rust and WASM. 
            Get native performance without leaving your TypeScript comfort zone.
          </p>
          <div className="flex flex-wrap justify-center gap-3 slide-up" style={{animationDelay: '0.4s'}}>
            <a href="#get-started" className="btn btn-primary">
              Get Started
            </a>
            <a href="https://github.com/blackdoyen/trust" className="btn btn-glass">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-6 md:p-8">
            <h2 className="text-xl font-bold mb-8 text-center">Write Once, Run Fast Everywhere</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="slide-up" style={{animationDelay: '0.2s'}}>
                <CodeEditor
                  language="typescript"
                  title="TypeScript Input"
                  code={`@trust.compile
class DataProcessor {
    @rust.optimize
    processLargeArray(data: number[]): number[] {
        return data.map(x => x * x)
                  .filter(x => x > 100)
                  .sort();
    }

    @rust.state
    private cache: Map<string, number[]> = new Map();
}`}
                />
              </div>
              <div className="slide-up" style={{animationDelay: '0.4s'}}>
                <CodeEditor
                  language="rust"
                  title="Generated Rust"
                  code={`#[wasm_bindgen]
pub struct DataProcessor {
    cache: HashMap<String, Vec<f64>>,
}

#[wasm_bindgen]
impl DataProcessor {
    pub fn process_large_array(data: &[f64]) -> Vec<f64> {
        let mut result: Vec<f64> = data.par_iter()
            .map(|x| x * x)
            .filter(|x| *x > 100.0)
            .collect();
        result.sort_unstable_by(|a, b| 
            a.partial_cmp(b).unwrap());
        result
    }
}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card slide-up" style={{animationDelay: `${0.2 * index}s`}}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">Use Cases</h2>
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="glass p-6 slide-up" style={{animationDelay: `${0.2 * index}s`}}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                    <CodeEditor
                      language="typescript"
                      title={useCase.title}
                      code={useCase.code}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item slide-up" style={{animationDelay: `${0.2 * index}s`}}>
                <div 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-sm font-semibold">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </div>
                <div 
                  className="faq-answer"
                  style={{
                    maxHeight: openFaq === index ? '200px' : '0',
                    opacity: openFaq === index ? 1 : 0,
                    padding: openFaq === index ? '0 1.5rem 1.5rem' : '0 1.5rem',
                  }}
                >
                  <p className="text-xs text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <footer className="glass mt-16 py-8 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5" />
                <span className="font-bold text-sm">TRust</span>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                TypeScript-to-Rust Performance Bridge
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Getting Started</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">API Reference</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="https://github.com/blackdoyen/trust" 
                     className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://reddit.com/r/trustlang" 
                     className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                    <Reddit className="w-4 h-4" />
                    Reddit
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/trustlang" 
                     className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-xs text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TRust. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;