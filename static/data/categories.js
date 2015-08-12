function hereDoc(f) {
	return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var categories_str = hereDoc( function () {
/*
<?xml version="1.0" encoding="UTF-8"?>
<!--
The ACM Computing Classification System [1998 Version] 

Copyright 2006, by the Association for Computing Machinery, Inc. Permission to make digital or hard copies of part or all of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. To copy otherwise, to republish, to post on servers, or to redistribute to lists, requires prior specific permission and/or a fee. Request permission to republish from: Publications Dept., ACM, Inc. Fax +1 (212) 869-0481 or E-mail permissions@acm.org. 

This XML derivative of The ACM Computing Classification System [1998 Version] was made by the University of Minho <http://www.uminho.pt>, Department of Information Systems <http://www.dsi.uminho.pt> with ACM's permission. 
For more information regarding the conversion, please contact the authors: Ana Alice Baptista <analice@dsi.uminho.pt>; Miguel Ferreira <mferreira@dsi.uminho.pt>; or refer to the Web site http://dspace-dev.dsi.uminho.pt:8080/en/addon_acmccs98.jsp. 

For permission to use this version outside of the conditions stated above, please contact ACM. 
-->
<node id="acmccs98" label="ACMCCS98">
	<isComposedBy>
		<node id="A." label="General Literature">
			<isComposedBy>
				<node id="A.0" label="GENERAL">
					<isComposedBy>
						<node label="Biographies/autobiographies"/>
						<node label="Conference proceedings"/>
						<node label="General literary works (e.g., fiction, plays)"/>
					</isComposedBy>
				</node>
				<node id="A.1" label="INTRODUCTORY AND SURVEY"/>
				<node id="A.2" label="REFERENCE (e.g., dictionaries, encyclopedias, glossaries)"/>
				<node id="A.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="B." label="Hardware">
			<isComposedBy>
				<node id="B.0" label="GENERAL"/>
				<node id="B.1" label="CONTROL STRUCTURES AND MICROPROGRAMMING">
					<isRelatedTo>
						<node id="D.3.2"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="B.1.0" label="General"/>
						<node id="B.1.1" label="Control Design Styles">
							<isComposedBy>
								<node label="Hardwired control">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Microprogrammed logic arrays">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Writable control store">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.1.2" label="Control Structure Performance Analysis and Design Aids">
							<isComposedBy>
								<node label="Automatic synthesis">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Formal models">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Simulation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.1.3" label="Control Structure Reliability, Testing, and Fault-Tolerance">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Diagnostics">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.1.4" label="Microprogram Design Aids">
							<isRelatedTo>
								<node id="D.2.2"/>
								<node id="D.2.4"/>
								<node id="D.3.2"/>
								<node id="D.3.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Firmware engineering">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Languages and compilers"/>
								<node label="Machine-independent microcode generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Optimization"/>
								<node label="Verification">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.1.5" label="Microcode Applications">
							<isComposedBy>
								<node label="Direct data manipulation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Firmware support of operating systems/instruction sets">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Instruction set interpretation"/>
								<node label="Peripheral control">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Special-purpose">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.2" label="ARITHMETIC AND LOGIC STRUCTURES">
					<isComposedBy>
						<node id="B.2.0" label="General"/>
						<node id="B.2.1" label="Design Styles">
							<isRelatedTo>
								<node id="C.1.1"/>
								<node id="C.1.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Calculator">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Parallel"/>
								<node label="Pipeline"/>
							</isComposedBy>
						</node>
						<node id="B.2.2" label="Performance Analysis and Design Aids">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Simulation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Verification">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Worst-case analysis">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.2.3" label="Reliability, Testing, and Fault-Tolerance">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Diagnostics">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.2.4" label="High-Speed Arithmetic">
							<isComposedBy>
								<node label="Algorithms"/>
								<node label="Cost/performance"/>
							</isComposedBy>
						</node>
						<node id="B.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.3" label="MEMORY STRUCTURES">
					<isComposedBy>
						<node id="B.3.0" label="General"/>
						<node id="B.3.1" label="Semiconductor Memories">
							<isRelatedTo>
								<node id="B.7.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Dynamic memory (DRAM)"/>
								<node label="Read-only memory (ROM)"/>
								<node label="Static memory (SRAM)"/>
							</isComposedBy>
						</node>
						<node id="B.3.2" label="Design Styles">
							<isRelatedTo>
								<node id="D.4.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Associative memories"/>
								<node label="Cache memories"/>
								<node label="Interleaved memories">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Mass storage (e.g., magnetic, optical, RAID)"/>
								<node label="Primary memory"/>
								<node label="Sequential-access memory">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Shared memory"/>
								<node label="Virtual memory"/>
							</isComposedBy>
						</node>
						<node id="B.3.3" label="Performance Analysis and Design Aids">
							<isRelatedTo>
								<node id="B.8"/>
								<node id="C.4"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Formal models">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Simulation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Worst-case analysis">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.3.4" label="Reliability, Testing, and Fault-Tolerance">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Diagnostics">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.3.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.4" label="INPUT/OUTPUT AND DATA COMMUNICATIONS">
					<isComposedBy>
						<node id="B.4.0" label="General"/>
						<node id="B.4.1" label="Data Communications Devices">
							<isComposedBy>
								<node label="Processors">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Receivers (e.g., voice, data, image)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Transmitters">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.4.2" label="Input/Output Devices">
							<isComposedBy>
								<node label="Channels and controllers"/>
								<node label="Data terminals and printers"/>
								<node label="Image display"/>
								<node label="Voice"/>
							</isComposedBy>
						</node>
						<node id="B.4.3" label="Interconnections (Subsystems)">
							<isComposedBy>
								<node label="Asynchronous/synchronous operation"/>
								<node label="Fiber optics"/>
								<node label="Interfaces"/>
								<node label="Parallel I/O"/>
								<node label="Physical structures (e.g., backplanes, cables, chip carriers)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Topology (e.g., bus, point-to-point)"/>
							</isComposedBy>
						</node>
						<node id="B.4.4" label="Performance Analysis and Design Aids">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Formal models">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Simulation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Verification">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Worst-case analysis">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.4.5" label="Reliability, Testing, and Fault-Tolerance">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Built-in tests">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Diagnostics">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Hardware reliability">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.5" label="REGISTER-TRANSFER-LEVEL IMPLEMENTATION">
					<isComposedBy>
						<node id="B.5.0" label="General"/>
						<node id="B.5.1" label="Design">
							<isComposedBy>
								<node label="Arithmetic and logic units"/>
								<node label="Control design"/>
								<node label="Data-path design"/>
								<node label="Memory design"/>
								<node label="Styles (e.g., parallel, pipeline, special-purpose)"/>
							</isComposedBy>
						</node>
						<node id="B.5.2" label="Design Aids">
							<isComposedBy>
								<node label="Automatic synthesis"/>
								<node label="Hardware description languages"/>
								<node label="Optimization"/>
								<node label="Simulation"/>
								<node label="Verification"/>
							</isComposedBy>
						</node>
						<node id="B.5.3" label="Reliability and Testing">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Built-in tests">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Testability">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.5.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.6" label="LOGIC DESIGN">
					<isComposedBy>
						<node id="B.6.0" label="General"/>
						<node id="B.6.1" label="Design Styles">
							<isComposedBy>
								<node label="Cellular arrays and automata"/>
								<node label="Combinational logic"/>
								<node label="Logic arrays"/>
								<node label="Memory control and access">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Memory used as logic">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Parallel circuits"/>
								<node label="Sequential circuits"/>
							</isComposedBy>
						</node>
						<node id="B.6.2" label="Reliability and Testing">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Built-in tests">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Testability">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.6.3" label="Design Aids">
							<isComposedBy>
								<node label="Automatic synthesis"/>
								<node label="Hardware description languages"/>
								<node label="Optimization"/>
								<node label="Simulation"/>
								<node label="Switching theory"/>
								<node label="Verification"/>
							</isComposedBy>
						</node>
						<node id="B.6.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.7" label="INTEGRATED CIRCUITS">
					<isComposedBy>
						<node id="B.7.0" label="General"/>
						<node id="B.7.1" label="Types and Design Styles">
							<isComposedBy>
								<node label="Advanced technologies"/>
								<node label="Algorithms implemented in hardware"/>
								<node label="Gate arrays"/>
								<node label="Input/output circuits"/>
								<node label="Memory technologies"/>
								<node label="Microprocessors and microcomputers"/>
								<node label="Standard cells">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="VLSI (very large scale integration)"/>
							</isComposedBy>
						</node>
						<node id="B.7.2" label="Design Aids">
							<isComposedBy>
								<node label="Graphics"/>
								<node label="Layout"/>
								<node label="Placement and routing"/>
								<node label="Simulation"/>
								<node label="Verification"/>
							</isComposedBy>
						</node>
						<node id="B.7.3" label="Reliability and Testing">
							<isRelatedTo>
								<node id="B.8"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Built-in tests">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error-checking">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Redundant design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Test generation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Testability">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="B.7.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.8" label="PERFORMANCE AND RELIABILITY">
					<isRelatedTo>
						<node id="C.4"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="B.8.0" label="General"/>
						<node id="B.8.1" label="Reliability, Testing, and Fault-Tolerance"/>
						<node id="B.8.2" label="Performance Analysis and Design Aids"/>
						<node id="B.8.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="B.m" label="MISCELLANEOUS">
					<isComposedBy>
						<node label="Design management"/>
					</isComposedBy>
				</node>
			</isComposedBy>
		</node>
		<node id="C." label="Computer Systems Organization">
			<isComposedBy>
				<node id="C.0" label="GENERAL">
					<isComposedBy>
						<node label="Hardware/software interfaces"/>
						<node label="Instruction set design (e.g., RISC, CISC, VLIW)"/>
						<node label="Modeling of computer architecture"/>
						<node label="System architectures"/>
						<node label="Systems specification methodology"/>
					</isComposedBy>
				</node>
				<node id="C.1" label="PROCESSOR ARCHITECTURES">
					<isComposedBy>
						<node id="C.1.0" label="General"/>
						<node id="C.1.1" label="Single Data Stream Architectures">
							<isComposedBy>
								<node label="Multiple-instruction-stream, single-data-stream processors (MISD)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Pipeline processors">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="RISC/CISC, VLIW architectures"/>
								<node label="Single-instruction-stream, single-data-stream processors (SISD)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Von Neumann architectures">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="C.1.2" label="Multiple Data Stream Architectures (Multiprocessors)">
							<isComposedBy>
								<node label="Array and vector processors"/>
								<node label="Associative processors"/>
								<node label="Connection machines"/>
								<node label="Interconnection architectures (e.g., common bus, multiport memory, crossbar switch)"/>
								<node label="Multiple-instruction-stream, multiple-data-stream processors (MIMD)"/>
								<node label="Parallel processors">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Pipeline processors">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Single-instruction-stream, multiple-data-stream processors (SIMD)"/>
							</isComposedBy>
						</node>
						<node id="C.1.3" label="Other Architecture Styles">
							<isComposedBy>
								<node label="Adaptable architectures"/>
								<node label="Analog computers"/>
								<node label="Capability architectures">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Cellular architecture (e.g., mobile)"/>
								<node label="Data-flow architectures"/>
								<node label="Heterogeneous (hybrid) systems"/>
								<node label="High-level language architectures">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Neural nets"/>
								<node label="Pipeline processors"/>
								<node label="Stack-oriented processors">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="C.1.4" label="Parallel Architectures">
							<isComposedBy>
								<node label="Distributed architectures"/>
								<node label="Mobile processors"/>
							</isComposedBy>
						</node>
						<node id="C.1.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Analog computers">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Hybrid systems">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="C.2" label="COMPUTER-COMMUNICATION NETWORKS">
					<isComposedBy>
						<node id="C.2.0" label="General">
							<isComposedBy>
								<node label="Data communications"/>
								<node label="Open Systems Interconnection reference model (OSI)"/>
								<node label="Security and protection (e.g., firewalls)"/>
							</isComposedBy>
						</node>
						<node id="C.2.1" label="Network Architecture and Design">
							<isComposedBy>
								<node label="Asynchronous Transfer Mode (ATM)"/>
								<node label="Centralized networks">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Circuit-switching networks"/>
								<node label="Distributed networks"/>
								<node label="Frame relay networks"/>
								<node label="ISDN (Integrated Services Digital Network)"/>
								<node label="Network communications"/>
								<node label="Network topology"/>
								<node label="Packet-switching networks"/>
								<node label="Store and forward networks"/>
								<node label="Wireless communication"/>
							</isComposedBy>
						</node>
						<node id="C.2.2" label="Network Protocols">
							<isComposedBy>
								<node label="Applications (SMTP, FTP, etc.)"/>
								<node label="Protocol architecture (OSI model)"/>
								<node label="Protocol verification"/>
								<node label="Routing protocols"/>
							</isComposedBy>
						</node>
						<node id="C.2.3" label="Network Operations">
							<isComposedBy>
								<node label="Network management"/>
								<node label="Network monitoring"/>
								<node label="Public networks"/>
							</isComposedBy>
						</node>
						<node id="C.2.4" label="Distributed Systems">
							<isComposedBy>
								<node label="Client/server"/>
								<node label="Distributed applications"/>
								<node label="Distributed databases"/>
								<node label="Network operating systems"/>
							</isComposedBy>
						</node>
						<node id="C.2.5" label="Local and Wide-Area Networks">
							<isComposedBy>
								<node label="Access schemes"/>
								<node label="Buses"/>
								<node label="Ethernet (e.g., CSMA/CD)"/>
								<node label="High-speed (e.g., FDDI, fiber channel, ATM)"/>
								<node label="Internet (e.g., TCP/IP)"/>
								<node label="Token rings"/>
							</isComposedBy>
						</node>
						<node id="C.2.6" label="Internetworking">
							<isRelatedTo>
								<node id="C.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Routers"/>
								<node label="Standards (e.g., TCP/IP)"/>
							</isComposedBy>
						</node>
						<node id="C.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="C.3" label="SPECIAL-PURPOSE AND APPLICATION-BASED SYSTEMS">
					<isRelatedTo>
						<node id="J.7"/>
					</isRelatedTo>
					<isComposedBy>
						<node label="Microprocessor/microcomputer applications"/>
						<node label="Process control systems"/>
						<node label="Real-time and embedded systems"/>
						<node label="Signal processing systems"/>
						<node label="Smartcards"/>
					</isComposedBy>
				</node>
				<node id="C.4" label="PERFORMANCE OF SYSTEMS">
					<isComposedBy>
						<node label="Design studies"/>
						<node label="Fault tolerance"/>
						<node label="Measurement techniques"/>
						<node label="Modeling techniques"/>
						<node label="Performance attributes"/>
						<node label="Reliability, availability, and serviceability"/>
					</isComposedBy>
				</node>
				<node id="C.5" label="COMPUTER SYSTEM IMPLEMENTATION">
					<isComposedBy>
						<node id="C.5.0" label="General"/>
						<node id="C.5.1" label="Large and Medium (``Mainframe'') Computers">
							<isComposedBy>
								<node label="Super (very large) computers"/>
							</isComposedBy>
						</node>
						<node id="C.5.2" label="Minicomputers">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node id="C.5.3" label="Microcomputers">
							<isComposedBy>
								<node label="Microprocessors"/>
								<node label="Personal computers"/>
								<node label="Portable devices (e.g., laptops, personal digital assistants)"/>
								<node label="Workstations"/>
							</isComposedBy>
						</node>
						<node id="C.5.4" label="VLSI Systems"/>
						<node id="C.5.5" label="Servers"/>
						<node id="C.5.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="C.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="D." label="Software">
			<isComposedBy>
				<node id="D.0" label="GENERAL"/>
				<node id="D.1" label="PROGRAMMING TECHNIQUES">
					<isRelatedTo>
						<node id="E."/>
					</isRelatedTo>
					<isComposedBy>
						<node id="D.1.0" label="General"/>
						<node id="D.1.1" label="Applicative (Functional) Programming"/>
						<node id="D.1.2" label="Automatic Programming">
							<isRelatedTo>
								<node id="I.2.2"/>
							</isRelatedTo>
						</node>
						<node id="D.1.3" label="Concurrent Programming">
							<isComposedBy>
								<node label="Distributed programming"/>
								<node label="Parallel programming"/>
							</isComposedBy>
						</node>
						<node id="D.1.4" label="Sequential Programming"/>
						<node id="D.1.5" label="Object-oriented Programming"/>
						<node id="D.1.6" label="Logic Programming"/>
						<node id="D.1.7" label="Visual Programming"/>
						<node id="D.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="D.2" label="SOFTWARE ENGINEERING">
					<isRelatedTo>
						<node id="K.6.3"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="D.2.0" label="General">
							<isRelatedTo>
								<node id="K.5.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Protection mechanisms"/>
								<node label="Standards"/>
							</isComposedBy>
						</node>
						<node id="D.2.1" label="Requirements/Specifications">
							<isRelatedTo>
								<node id="D.3.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Elicitation methods (e.g., rapid prototyping, interviews, JAD)"/>
								<node label="Languages"/>
								<node label="Methodologies (e.g., object-oriented, structured)"/>
								<node label="Tools"/>
							</isComposedBy>
						</node>
						<node id="D.2.2" label="Design Tools and Techniques">
							<isComposedBy>
								<node label="Computer-aided software engineering (CASE)"/>
								<node label="Decision tables"/>
								<node label="Evolutionary prototyping"/>
								<node label="Flow charts"/>
								<node label="Modules and interfaces"/>
								<node label="Object-oriented design methods"/>
								<node label="Petri nets"/>
								<node label="Programmer workbench">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Software libraries"/>
								<node label="State diagrams"/>
								<node label="Structured programming">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Top-down programming">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="User interfaces"/>
							</isComposedBy>
						</node>
						<node id="D.2.3" label="Coding Tools and Techniques">
							<isComposedBy>
								<node label="Object-oriented programming"/>
								<node label="Pretty printers"/>
								<node label="Program editors"/>
								<node label="Reentrant code">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Standards"/>
								<node label="Structured programming"/>
								<node label="Top-down programming"/>
							</isComposedBy>
						</node>
						<node id="D.2.4" label="Software/Program Verification">
							<isRelatedTo>
								<node id="F.3.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Assertion checkers"/>
								<node label="Class invariants"/>
								<node label="Correctness proofs"/>
								<node label="Formal methods"/>
								<node label="Model checking"/>
								<node label="Programming by contract"/>
								<node label="Reliability"/>
								<node label="Statistical methods"/>
								<node label="Validation"/>
							</isComposedBy>
						</node>
						<node id="D.2.5" label="Testing and Debugging">
							<isComposedBy>
								<node label="Code inspections and walk-throughs"/>
								<node label="Debugging aids"/>
								<node label="Diagnostics"/>
								<node label="Distributed debugging"/>
								<node label="Dumps">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error handling and recovery"/>
								<node label="Monitors"/>
								<node label="Symbolic execution"/>
								<node label="Testing tools (e.g., data generators, coverage testing)"/>
								<node label="Tracing"/>
							</isComposedBy>
						</node>
						<node id="D.2.6" label="Programming Environments">
							<isComposedBy>
								<node label="Graphical environments"/>
								<node label="Integrated environments"/>
								<node label="Interactive environments"/>
								<node label="Programmer workbench"/>
							</isComposedBy>
						</node>
						<node id="D.2.7" label="Distribution, Maintenance, and Enhancement">
							<isComposedBy>
								<node label="Corrections">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Documentation"/>
								<node label="Enhancement">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Extensibility">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Portability"/>
								<node label="Restructuring, reverse engineering, and reengineering"/>
								<node label="Version control"/>
							</isComposedBy>
						</node>
						<node id="D.2.8" label="Metrics">
							<isRelatedTo>
								<node id="D.4.8"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Complexity measures"/>
								<node label="Performance measures"/>
								<node label="Process metrics"/>
								<node label="Product metrics"/>
								<node label="Software science">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="D.2.9" label="Management">
							<isRelatedTo>
								<node id="K.6.3"/>
								<node id="K.6.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Copyrights">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Cost estimation"/>
								<node label="Life cycle"/>
								<node label="Productivity"/>
								<node label="Programming teams"/>
								<node label="Software configuration management"/>
								<node label="Software process models (e.g., CMM, ISO, PSP)"/>
								<node label="Software quality assurance (SQA)"/>
								<node label="Time estimation"/>
							</isComposedBy>
						</node>
						<node id="D.2.10" label="Design">
							<isRelatedTo>
								<node id="D.2.2"/>
							</isRelatedTo>
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
							<isComposedBy>
								<node label="Methodologies">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Representation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="D.2.11" label="Software Architectures">
							<isComposedBy>
								<node label="Data abstraction"/>
								<node label="Domain-specific architectures"/>
								<node label="Information hiding"/>
								<node label="Languages (e.g., description, interconnection, definition)"/>
								<node label="Patterns (e.g., client/server, pipeline, blackboard)"/>
							</isComposedBy>
						</node>
						<node id="D.2.12" label="Interoperability">
							<isComposedBy>
								<node label="Data mapping"/>
								<node label="Distributed objects"/>
								<node label="Interface definition languages"/>
							</isComposedBy>
						</node>
						<node id="D.2.13" label="Reusable Software">
							<isComposedBy>
								<node label="Domain engineering"/>
								<node label="Reusable libraries"/>
								<node label="Reuse models"/>
							</isComposedBy>
						</node>
						<node id="D.2.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Rapid prototyping">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Reusable software">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="D.3" label="PROGRAMMING LANGUAGES">
					<isComposedBy>
						<node id="D.3.0" label="General">
							<isComposedBy>
								<node label="Standards"/>
							</isComposedBy>
						</node>
						<node id="D.3.1" label="Formal Definitions and Theory">
							<isRelatedTo>
								<node id="D.2.1"/>
								<node id="F.3.1"/>
								<node id="F.3.2"/>
								<node id="F.4.2"/>
								<node id="F.4.3"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Semantics"/>
								<node label="Syntax"/>
							</isComposedBy>
						</node>
						<node id="D.3.2" label="Language Classifications">
							<isComposedBy>
								<node label="Applicative (functional) languages"/>
								<node label="Concurrent, distributed, and parallel languages"/>
								<node label="Constraint and logic languages"/>
								<node label="Data-flow languages"/>
								<node label="Design languages"/>
								<node label="Extensible languages"/>
								<node label="Macro and assembly languages"/>
								<node label="Microprogramming languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Multiparadigm languages"/>
								<node label="Nondeterministic languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Nonprocedural languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Object-oriented languages"/>
								<node label="Specialized application languages"/>
								<node label="Very high-level languages"/>
							</isComposedBy>
						</node>
						<node id="D.3.3" label="Language Constructs and Features">
							<isRelatedTo>
								<node id="E.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Abstract data types"/>
								<node label="Classes and objects"/>
								<node label="Concurrent programming structures"/>
								<node label="Constraints"/>
								<node label="Control structures"/>
								<node label="Coroutines"/>
								<node label="Data types and structures"/>
								<node label="Dynamic storage management"/>
								<node label="Frameworks"/>
								<node label="Inheritance"/>
								<node label="Input/output"/>
								<node label="Modules, packages"/>
								<node label="Patterns"/>
								<node label="Polymorphism"/>
								<node label="Procedures, functions, and subroutines"/>
								<node label="Recursion"/>
							</isComposedBy>
						</node>
						<node id="D.3.4" label="Processors">
							<isComposedBy>
								<node label="Code generation"/>
								<node label="Compilers"/>
								<node label="Debuggers"/>
								<node label="Incremental compilers"/>
								<node label="Interpreters"/>
								<node label="Memory management (garbage collection)"/>
								<node label="Optimization"/>
								<node label="Parsing"/>
								<node label="Preprocessors"/>
								<node label="Retargetable compilers"/>
								<node label="Run-time environments"/>
								<node label="Translator writing systems and compiler generators"/>
							</isComposedBy>
						</node>
						<node id="D.3.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="D.4" label="OPERATING SYSTEMS">
					<isRelatedTo>
						<node id="C."/>
					</isRelatedTo>
					<isComposedBy>
						<node id="D.4.0" label="General"/>
						<node id="D.4.1" label="Process Management">
							<isComposedBy>
								<node label="Concurrency"/>
								<node label="Deadlocks"/>
								<node label="Multiprocessing/multiprogramming/multitasking"/>
								<node label="Mutual exclusion"/>
								<node label="Scheduling"/>
								<node label="Synchronization"/>
								<node label="Threads"/>
							</isComposedBy>
						</node>
						<node id="D.4.2" label="Storage Management">
							<isComposedBy>
								<node label="Allocation/deallocation strategies"/>
								<node label="Distributed memories"/>
								<node label="Garbage collection"/>
								<node label="Main memory"/>
								<node label="Secondary storage"/>
								<node label="Segmentation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Storage hierarchies"/>
								<node label="Swapping">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Virtual memory"/>
							</isComposedBy>
						</node>
						<node id="D.4.3" label="File Systems Management">
							<isRelatedTo>
								<node id="E.5"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Access methods"/>
								<node label="Directory structures"/>
								<node label="Distributed file systems"/>
								<node label="File organization"/>
								<node label="Maintenance">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="D.4.4" label="Communications Management">
							<isRelatedTo>
								<node id="C.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Buffering"/>
								<node label="Input/output"/>
								<node label="Message sending"/>
								<node label="Network communication"/>
								<node label="Terminal management">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="D.4.5" label="Reliability">
							<isComposedBy>
								<node label="Backup procedures"/>
								<node label="Checkpoint/restart"/>
								<node label="Fault-tolerance"/>
								<node label="Verification"/>
							</isComposedBy>
						</node>
						<node id="D.4.6" label="Security and Protection">
							<isRelatedTo>
								<node id="K.6.5"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Access controls"/>
								<node label="Authentication"/>
								<node label="Cryptographic controls"/>
								<node label="Information flow controls"/>
								<node label="Invasive software (e.g., viruses, worms, Trojan horses)"/>
								<node label="Security kernels">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Verification">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="D.4.7" label="Organization and Design">
							<isComposedBy>
								<node label="Batch processing systems">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Distributed systems"/>
								<node label="Hierarchical design">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Interactive systems"/>
								<node label="Real-time systems and embedded systems"/>
							</isComposedBy>
						</node>
						<node id="D.4.8" label="Performance">
							<isRelatedTo>
								<node id="C.4"/>
								<node id="D.2.8"/>
								<node id="I.6"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Measurements"/>
								<node label="Modeling and prediction"/>
								<node label="Monitors"/>
								<node label="Operational analysis"/>
								<node label="Queueing theory"/>
								<node label="Simulation"/>
								<node label="Stochastic analysis"/>
							</isComposedBy>
						</node>
						<node id="D.4.9" label="Systems Programs and Utilities">
							<isComposedBy>
								<node label="Command and control languages"/>
								<node label="Linkers">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Loaders">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Window managers"/>
							</isComposedBy>
						</node>
						<node id="D.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="D.m" label="MISCELLANEOUS">
					<isComposedBy>
						<node label="Software psychology">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
					</isComposedBy>
				</node>
			</isComposedBy>
		</node>
		<node id="E." label="Data">
			<isComposedBy>
				<node id="E.0" label="GENERAL"/>
				<node id="E.1" label="DATA STRUCTURES">
					<isComposedBy>
						<node label="Arrays"/>
						<node label="Distributed data structures"/>
						<node label="Graphs and networks"/>
						<node label="Lists, stacks, and queues"/>
						<node label="Records"/>
						<node label="Tables">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Trees"/>
					</isComposedBy>
				</node>
				<node id="E.2" label="DATA STORAGE REPRESENTATIONS">
					<isComposedBy>
						<node label="Composite structures">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Contiguous representations">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Hash-table representations"/>
						<node label="Linked representations"/>
						<node label="Object representation"/>
						<node label="Primitive data items">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
					</isComposedBy>
				</node>
				<node id="E.3" label="DATA ENCRYPTION">
					<isComposedBy>
						<node label="Code breaking"/>
						<node label="Data encryption standard (DES)">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Public key cryptosystems"/>
						<node label="Standards (e.g., DES, PGP, RSA)"/>
					</isComposedBy>
				</node>
				<node id="E.4" label="CODING AND INFORMATION THEORY">
					<isRelatedTo>
						<node id="H.1.1"/>
					</isRelatedTo>
					<isComposedBy>
						<node label="Data compaction and compression"/>
						<node label="Error control codes"/>
						<node label="Formal models of communication"/>
						<node label="Nonsecret encoding schemes">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
					</isComposedBy>
				</node>
				<node id="E.5" label="FILES">
					<isRelatedTo>
						<node id="D.4.3"/>
						<node id="F.2.2"/>
						<node id="H.2"/>
					</isRelatedTo>
					<isComposedBy>
						<node label="Backup/recovery"/>
						<node label="Optimization">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Organization/structure"/>
						<node label="Sorting/searching"/>
					</isComposedBy>
				</node>
				<node id="E.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="F." label="Theory of Computation">
			<isComposedBy>
				<node id="F.0" label="GENERAL"/>
				<node id="F.1" label="COMPUTATION BY ABSTRACT DEVICES">
					<isComposedBy>
						<node id="F.1.0" label="General"/>
						<node id="F.1.1" label="Models of Computation">
							<isRelatedTo>
								<node id="F.4.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Automata (e.g., finite, push-down, resource-bounded)"/>
								<node label="Bounded-action devices (e.g., Turing machines, random access machines)"/>
								<node label="Computability theory"/>
								<node label="Relations between models"/>
								<node label="Self-modifying machines (e.g., neural networks)"/>
								<node label="Unbounded-action devices (e.g., cellular automata, circuits, networks of machines)"/>
							</isComposedBy>
						</node>
						<node id="F.1.2" label="Modes of Computation">
							<isComposedBy>
								<node label="Alternation and nondeterminism"/>
								<node label="Interactive and reactive computation"/>
								<node label="Online computation"/>
								<node label="Parallelism and concurrency"/>
								<node label="Probabilistic computation"/>
								<node label="Relations among modes">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Relativized computation"/>
							</isComposedBy>
						</node>
						<node id="F.1.3" label="Complexity Measures and Classes">
							<isRelatedTo>
								<node id="F.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Complexity hierarchies"/>
								<node label="Machine-independent complexity">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Reducibility and completeness"/>
								<node label="Relations among complexity classes"/>
								<node label="Relations among complexity measures"/>
							</isComposedBy>
						</node>
						<node id="F.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="F.2" label="ANALYSIS OF ALGORITHMS AND PROBLEM COMPLEXITY">
					<isRelatedTo>
						<node id="B.6"/>
						<node id="B.7"/>
						<node id="F.1.3"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="F.2.0" label="General"/>
						<node id="F.2.1" label="Numerical Algorithms and Problems">
							<isRelatedTo>
								<node id="G.1"/>
								<node id="G.4"/>
								<node id="I.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Computation of transforms (e.g., fast Fourier transform)"/>
								<node label="Computations in finite fields"/>
								<node label="Computations on matrices"/>
								<node label="Computations on polynomials"/>
								<node label="Number-theoretic computations (e.g., factoring, primality testing)"/>
							</isComposedBy>
						</node>
						<node id="F.2.2" label="Nonnumerical Algorithms and Problems">
							<isRelatedTo>
								<node id="E.2"/>
								<node id="E.3"/>
								<node id="E.4"/>
								<node id="E.5"/>
								<node id="G.2"/>
								<node id="H.2"/>
								<node id="H.3"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Complexity of proof procedures"/>
								<node label="Computations on discrete structures"/>
								<node label="Geometrical problems and computations"/>
								<node label="Pattern matching"/>
								<node label="Routing and layout"/>
								<node label="Sequencing and scheduling"/>
								<node label="Sorting and searching"/>
							</isComposedBy>
						</node>
						<node id="F.2.3" label="Tradeoffs between Complexity Measures">
							<isRelatedTo>
								<node id="F.1.3"/>
							</isRelatedTo>
						</node>
						<node id="F.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="F.3" label="LOGICS AND MEANINGS OF PROGRAMS">
					<isComposedBy>
						<node id="F.3.0" label="General"/>
						<node id="F.3.1" label="Specifying and Verifying and Reasoning about Programs">
							<isRelatedTo>
								<node id="D.2.1"/>
								<node id="D.2.4"/>
								<node id="D.3.1"/>
								<node id="E.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Assertions"/>
								<node label="Invariants"/>
								<node label="Logics of programs"/>
								<node label="Mechanical verification"/>
								<node label="Pre- and post-conditions"/>
								<node label="Specification techniques"/>
							</isComposedBy>
						</node>
						<node id="F.3.2" label="Semantics of Programming Languages">
							<isRelatedTo>
								<node id="D.3.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Algebraic approaches to semantics"/>
								<node label="Denotational semantics"/>
								<node label="Operational semantics"/>
								<node label="Partial evaluation"/>
								<node label="Process models"/>
								<node label="Program analysis"/>
							</isComposedBy>
						</node>
						<node id="F.3.3" label="Studies of Program Constructs">
							<isRelatedTo>
								<node id="D.3.2"/>
								<node id="D.3.3"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Control primitives"/>
								<node label="Functional constructs"/>
								<node label="Object-oriented constructs"/>
								<node label="Program and recursion schemes"/>
								<node label="Type structure"/>
							</isComposedBy>
						</node>
						<node id="F.3.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="F.4" label="MATHEMATICAL LOGIC AND FORMAL LANGUAGES">
					<isComposedBy>
						<node id="F.4.0" label="General"/>
						<node id="F.4.1" label="Mathematical Logic">
							<isRelatedTo>
								<node id="F.1.1"/>
								<node id="I.2.2"/>
								<node id="I.2.3"/>
								<node id="I.2.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Computability theory"/>
								<node label="Computational logic"/>
								<node label="Lambda calculus and related systems"/>
								<node label="Logic and constraint programming"/>
								<node label="Mechanical theorem proving"/>
								<node label="Modal logic"/>
								<node label="Model theory"/>
								<node label="Proof theory"/>
								<node label="Recursive function theory"/>
								<node label="Set theory"/>
								<node label="Temporal logic"/>
							</isComposedBy>
						</node>
						<node id="F.4.2" label="Grammars and Other Rewriting Systems">
							<isRelatedTo>
								<node id="D.3.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Decision problems"/>
								<node label="Grammar types (e.g., context-free, context-sensitive)"/>
								<node label="Parallel rewriting systems (e.g., developmental systems, L-systems)"/>
								<node label="Parsing"/>
								<node label="Thue systems"/>
							</isComposedBy>
						</node>
						<node id="F.4.3" label="Formal Languages">
							<isRelatedTo>
								<node id="D.3.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Algebraic language theory"/>
								<node label="Classes defined by grammars or automata (e.g., context-free languages, regular sets, recursive sets)"/>
								<node label="Classes defined by resource-bounded automata">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Decision problems"/>
								<node label="Operations on languages"/>
							</isComposedBy>
						</node>
						<node id="F.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="F.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="G." label="Mathematics of Computing">
			<isComposedBy>
				<node id="G.0" label="GENERAL"/>
				<node id="G.1" label="NUMERICAL ANALYSIS">
					<isComposedBy>
						<node id="G.1.0" label="General">
							<isComposedBy>
								<node label="Computer arithmetic"/>
								<node label="Conditioning (and ill-conditioning)"/>
								<node label="Error analysis"/>
								<node label="Interval arithmetic"/>
								<node label="Multiple precision arithmetic"/>
								<node label="Numerical algorithms"/>
								<node label="Parallel algorithms"/>
								<node label="Stability (and instability)"/>
							</isComposedBy>
						</node>
						<node id="G.1.1" label="Interpolation">
							<isRelatedTo>
								<node id="I.3.5"/>
								<node id="I.3.7"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Difference formulas">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Extrapolation"/>
								<node label="Interpolation formulas"/>
								<node label="Smoothing"/>
								<node label="Spline and piecewise polynomial interpolation"/>
							</isComposedBy>
						</node>
						<node id="G.1.2" label="Approximation">
							<isComposedBy>
								<node label="Approximation of surfaces and contours"/>
								<node label="Chebyshev approximation and theory"/>
								<node label="Elementary function approximation"/>
								<node label="Fast Fourier transforms (FFT)"/>
								<node label="Least squares approximation"/>
								<node label="Linear approximation"/>
								<node label="Minimax approximation and algorithms"/>
								<node label="Nonlinear approximation"/>
								<node label="Rational approximation"/>
								<node label="Special function approximations"/>
								<node label="Spline and piecewise polynomial approximation"/>
								<node label="Wavelets and fractals"/>
							</isComposedBy>
						</node>
						<node id="G.1.3" label="Numerical Linear Algebra">
							<isComposedBy>
								<node label="Conditioning"/>
								<node label="Determinants">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Eigenvalues and eigenvectors (direct and iterative methods)"/>
								<node label="Error analysis"/>
								<node label="Linear systems (direct and iterative methods)"/>
								<node label="Matrix inversion"/>
								<node label="Pseudoinverses">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Singular value decomposition"/>
								<node label="Sparse, structured, and very large systems (direct and iterative methods)"/>
							</isComposedBy>
						</node>
						<node id="G.1.4" label="Quadrature and Numerical Differentiation">
							<isRelatedTo>
								<node id="F.2.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Adaptive and iterative quadrature"/>
								<node label="Automatic differentiation"/>
								<node label="Equal interval integration">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Error analysis"/>
								<node label="Finite difference methods"/>
								<node label="Gaussian quadrature"/>
								<node label="Iterative methods"/>
								<node label="Multidimensional (multiple) quadrature"/>
							</isComposedBy>
						</node>
						<node id="G.1.5" label="Roots of Nonlinear Equations">
							<isComposedBy>
								<node label="Continuation (homotopy) methods"/>
								<node label="Convergence"/>
								<node label="Error analysis"/>
								<node label="Iterative methods"/>
								<node label="Polynomials, methods for"/>
								<node label="Systems of equations"/>
							</isComposedBy>
						</node>
						<node id="G.1.6" label="Optimization">
							<isComposedBy>
								<node label="Constrained optimization"/>
								<node label="Convex programming"/>
								<node label="Global optimization"/>
								<node label="Gradient methods"/>
								<node label="Integer programming"/>
								<node label="Least squares methods"/>
								<node label="Linear programming"/>
								<node label="Nonlinear programming"/>
								<node label="Quadratic programming methods"/>
								<node label="Simulated annealing"/>
								<node label="Stochastic programming"/>
								<node label="Unconstrained optimization"/>
							</isComposedBy>
						</node>
						<node id="G.1.7" label="Ordinary Differential Equations">
							<isComposedBy>
								<node label="Boundary value problems"/>
								<node label="Chaotic systems"/>
								<node label="Convergence and stability"/>
								<node label="Differential-algebraic equations"/>
								<node label="Error analysis"/>
								<node label="Finite difference methods"/>
								<node label="Initial value problems"/>
								<node label="Multistep and multivalue methods"/>
								<node label="One-step (single step) methods"/>
								<node label="Stiff equations"/>
							</isComposedBy>
						</node>
						<node id="G.1.8" label="Partial Differential Equations">
							<isComposedBy>
								<node label="Domain decomposition methods"/>
								<node label="Elliptic equations"/>
								<node label="Finite difference methods"/>
								<node label="Finite element methods"/>
								<node label="Finite volume methods"/>
								<node label="Hyperbolic equations"/>
								<node label="Inverse problems"/>
								<node label="Iterative solution techniques"/>
								<node label="Method of lines"/>
								<node label="Multigrid and multilevel methods"/>
								<node label="Parabolic equations"/>
								<node label="Spectral methods"/>
							</isComposedBy>
						</node>
						<node id="G.1.9" label="Integral Equations">
							<isComposedBy>
								<node label="Delay equations"/>
								<node label="Fredholm equations"/>
								<node label="Integro-differential equations"/>
								<node label="Volterra equations"/>
							</isComposedBy>
						</node>
						<node id="G.1.10" label="Applications"/>
						<node id="G.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="G.2" label="DISCRETE MATHEMATICS">
					<isComposedBy>
						<node id="G.2.0" label="General"/>
						<node id="G.2.1" label="Combinatorics">
							<isRelatedTo>
								<node id="F.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Combinatorial algorithms"/>
								<node label="Counting problems"/>
								<node label="Generating functions"/>
								<node label="Permutations and combinations"/>
								<node label="Recurrences and difference equations"/>
							</isComposedBy>
						</node>
						<node id="G.2.2" label="Graph Theory">
							<isRelatedTo>
								<node id="F.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Graph algorithms"/>
								<node label="Graph labeling"/>
								<node label="Hypergraphs"/>
								<node label="Network problems"/>
								<node label="Path and circuit problems"/>
								<node label="Trees"/>
							</isComposedBy>
						</node>
						<node id="G.2.3" label="Applications"/>
						<node id="G.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="G.3" label="PROBABILITY AND STATISTICS">
					<isComposedBy>
						<node label="Contingency table analysis"/>
						<node label="Correlation and regression analysis"/>
						<node label="Distribution functions"/>
						<node label="Experimental design"/>
						<node label="Markov processes"/>
						<node label="Multivariate statistics"/>
						<node label="Nonparametric statistics"/>
						<node label="Probabilistic algorithms (including Monte Carlo)"/>
						<node label="Queueing theory"/>
						<node label="Random number generation"/>
						<node label="Reliability and life testing"/>
						<node label="Renewal theory"/>
						<node label="Robust regression"/>
						<node label="Statistical computing"/>
						<node label="Statistical software"/>
						<node label="Stochastic processes"/>
						<node label="Survival analysis"/>
						<node label="Time series analysis"/>
					</isComposedBy>
				</node>
				<node id="G.4" label="MATHEMATICAL SOFTWARE">
					<isComposedBy>
						<node label="Algorithm design and analysis"/>
						<node label="Certification and testing"/>
						<node label="Documentation"/>
						<node label="Efficiency"/>
						<node label="Parallel and vector implementations"/>
						<node label="Portability">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Reliability and robustness"/>
						<node label="User interfaces"/>
						<node label="Verification">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
					</isComposedBy>
				</node>
				<node id="G.m" label="MISCELLANEOUS">
					<isComposedBy>
						<node label="Queueing theory">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
					</isComposedBy>
				</node>
			</isComposedBy>
		</node>
		<node id="H." label="Information Systems">
			<isComposedBy>
				<node id="H.0" label="GENERAL"/>
				<node id="H.1" label="MODELS AND PRINCIPLES">
					<isComposedBy>
						<node id="H.1.0" label="General"/>
						<node id="H.1.1" label="Systems and Information Theory">
							<isRelatedTo>
								<node id="E.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="General systems theory"/>
								<node label="Information theory"/>
								<node label="Value of information"/>
							</isComposedBy>
						</node>
						<node id="H.1.2" label="User/Machine Systems">
							<isComposedBy>
								<node label="Human factors"/>
								<node label="Human information processing"/>
								<node label="Software psychology"/>
							</isComposedBy>
						</node>
						<node id="H.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="H.2" label="DATABASE MANAGEMENT">
					<isRelatedTo>
						<node id="E.5"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="H.2.0" label="General">
							<isComposedBy>
								<node label="Security, integrity, and protection">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="H.2.1" label="Logical Design">
							<isComposedBy>
								<node label="Data models"/>
								<node label="Normal forms"/>
								<node label="Schema and subschema"/>
							</isComposedBy>
						</node>
						<node id="H.2.2" label="Physical Design">
							<isComposedBy>
								<node label="Access methods"/>
								<node label="Deadlock avoidance"/>
								<node label="Recovery and restart"/>
							</isComposedBy>
						</node>
						<node id="H.2.3" label="Languages">
							<isRelatedTo>
								<node id="D.3.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Data description languages (DDL)"/>
								<node label="Data manipulation languages (DML)"/>
								<node label="Database (persistent) programming languages"/>
								<node label="Query languages"/>
								<node label="Report writers"/>
							</isComposedBy>
						</node>
						<node id="H.2.4" label="Systems">
							<isComposedBy>
								<node label="Concurrency"/>
								<node label="Distributed databases"/>
								<node label="Multimedia databases"/>
								<node label="Object-oriented databases"/>
								<node label="Parallel databases"/>
								<node label="Query processing"/>
								<node label="Relational databases"/>
								<node label="Rule-based databases"/>
								<node label="Textual databases"/>
								<node label="Transaction processing"/>
							</isComposedBy>
						</node>
						<node id="H.2.5" label="Heterogeneous Databases">
							<isComposedBy>
								<node label="Data translation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Program translation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="H.2.6" label="Database Machines"/>
						<node id="H.2.7" label="Database Administration">
							<isComposedBy>
								<node label="Data dictionary/directory"/>
								<node label="Data warehouse and repository"/>
								<node label="Logging and recovery"/>
								<node label="Security, integrity, and protection"/>
							</isComposedBy>
						</node>
						<node id="H.2.8" label="Database Applications">
							<isComposedBy>
								<node label="Data mining"/>
								<node label="Image databases"/>
								<node label="Scientific databases"/>
								<node label="Spatial databases and GIS"/>
								<node label="Statistical databases"/>
							</isComposedBy>
						</node>
						<node id="H.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="H.3" label="INFORMATION STORAGE AND RETRIEVAL">
					<isComposedBy>
						<node id="H.3.0" label="General"/>
						<node id="H.3.1" label="Content Analysis and Indexing">
							<isComposedBy>
								<node label="Abstracting methods"/>
								<node label="Dictionaries"/>
								<node label="Indexing methods"/>
								<node label="Linguistic processing"/>
								<node label="Thesauruses"/>
							</isComposedBy>
						</node>
						<node id="H.3.2" label="Information Storage">
							<isComposedBy>
								<node label="File organization"/>
								<node label="Record classification">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="H.3.3" label="Information Search and Retrieval">
							<isComposedBy>
								<node label="Clustering"/>
								<node label="Information filtering"/>
								<node label="Query formulation"/>
								<node label="Relevance feedback"/>
								<node label="Retrieval models"/>
								<node label="Search process"/>
								<node label="Selection process"/>
							</isComposedBy>
						</node>
						<node id="H.3.4" label="Systems and Software">
							<isComposedBy>
								<node label="Current awareness systems (selective dissemination of information--SDI)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Distributed systems"/>
								<node label="Information networks"/>
								<node label="Performance evaluation (efficiency and effectiveness)"/>
								<node label="Question-answering (fact retrieval) systems">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="User profiles and alert services"/>
							</isComposedBy>
						</node>
						<node id="H.3.5" label="Online Information Services">
							<isComposedBy>
								<node label="Commercial services"/>
								<node label="Data sharing"/>
								<node label="Web-based services"/>
							</isComposedBy>
						</node>
						<node id="H.3.6" label="Library Automation">
							<isComposedBy>
								<node label="Large text archives"/>
							</isComposedBy>
						</node>
						<node id="H.3.7" label="Digital Libraries">
							<isComposedBy>
								<node label="Collection"/>
								<node label="Dissemination"/>
								<node label="Standards"/>
								<node label="Systems issues"/>
								<node label="User issues"/>
							</isComposedBy>
						</node>
						<node id="H.3.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="H.4" label="INFORMATION SYSTEMS APPLICATIONS">
					<isComposedBy>
						<node id="H.4.0" label="General"/>
						<node id="H.4.1" label="Office Automation">
							<isRelatedTo>
								<node id="I.7"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Desktop publishing"/>
								<node label="Equipment">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Groupware"/>
								<node label="Spreadsheets"/>
								<node label="Time management (e.g., calendars, schedules)"/>
								<node label="Word processing"/>
								<node label="Workflow management"/>
							</isComposedBy>
						</node>
						<node id="H.4.2" label="Types of Systems">
							<isComposedBy>
								<node label="Decision support (e.g., MIS)"/>
								<node label="Logistics"/>
							</isComposedBy>
						</node>
						<node id="H.4.3" label="Communications Applications">
							<isComposedBy>
								<node label="Bulletin boards"/>
								<node label="Computer conferencing, teleconferencing, and videoconferencing"/>
								<node label="Electronic mail"/>
								<node label="Information browsers"/>
								<node label="Videotex"/>
							</isComposedBy>
						</node>
						<node id="H.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="H.5" label="INFORMATION INTERFACES AND PRESENTATION (e.g., HCI)">
					<isRelatedTo>
						<node id="I.7"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="H.5.0" label="General"/>
						<node id="H.5.1" label="Multimedia Information Systems">
							<isComposedBy>
								<node label="Animations"/>
								<node label="Artificial, augmented, and virtual realities"/>
								<node label="Audio input/output"/>
								<node label="Evaluation/methodology"/>
								<node label="Hypertext navigation and maps">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Video (e.g., tape, disk, DVI)"/>
							</isComposedBy>
						</node>
						<node id="H.5.2" label="User Interfaces">
							<isRelatedTo>
								<node id="D.2.2"/>
								<node id="H.1.2"/>
								<node id="I.3.6"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Auditory (non-speech) feedback"/>
								<node label="Benchmarking"/>
								<node label="Ergonomics"/>
								<node label="Evaluation/methodology"/>
								<node label="Graphical user interfaces (GUI)"/>
								<node label="Haptic I/O"/>
								<node label="Input devices and strategies (e.g., mouse, touchscreen)"/>
								<node label="Interaction styles (e.g., commands, menus, forms, direct manipulation)"/>
								<node label="Natural language"/>
								<node label="Prototyping"/>
								<node label="Screen design (e.g., text, graphics, color)"/>
								<node label="Standardization"/>
								<node label="Style guides"/>
								<node label="Theory and methods"/>
								<node label="Training, help, and documentation"/>
								<node label="User-centered design"/>
								<node label="User interface management systems (UIMS)"/>
								<node label="Voice I/O"/>
								<node label="Windowing systems"/>
							</isComposedBy>
						</node>
						<node id="H.5.3" label="Group and Organization Interfaces">
							<isComposedBy>
								<node label="Asynchronous interaction"/>
								<node label="Collaborative computing"/>
								<node label="Computer-supported cooperative work"/>
								<node label="Evaluation/methodology"/>
								<node label="Organizational design"/>
								<node label="Synchronous interaction"/>
								<node label="Theory and models"/>
								<node label="Web-based interaction"/>
							</isComposedBy>
						</node>
						<node id="H.5.4" label="Hypertext/Hypermedia">
							<isRelatedTo>
								<node id="I.7"/>
								<node id="J.7"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Architectures"/>
								<node label="Navigation"/>
								<node label="Theory"/>
								<node label="User issues"/>
							</isComposedBy>
						</node>
						<node id="H.5.5" label="Sound and Music Computing">
							<isRelatedTo>
								<node id="J.5"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Methodologies and techniques"/>
								<node label="Modeling"/>
								<node label="Signal analysis, synthesis, and processing"/>
								<node label="Systems"/>
							</isComposedBy>
						</node>
						<node id="H.5.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="H.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="I." label="Computing Methodologies">
			<isComposedBy>
				<node id="I.0" label="GENERAL"/>
				<node id="I.1" label="SYMBOLIC AND ALGEBRAIC MANIPULATION">
					<isComposedBy>
						<node id="I.1.0" label="General"/>
						<node id="I.1.1" label="Expressions and Their Representation">
							<isRelatedTo>
								<node id="E.1"/>
								<node id="E.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Representations (general and polynomial)"/>
								<node label="Simplification of expressions"/>
							</isComposedBy>
						</node>
						<node id="I.1.2" label="Algorithms">
							<isRelatedTo>
								<node id="F.2.1"/>
								<node id="F.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Algebraic algorithms"/>
								<node label="Analysis of algorithms"/>
								<node label="Nonalgebraic algorithms"/>
							</isComposedBy>
						</node>
						<node id="I.1.3" label="Languages and Systems">
							<isRelatedTo>
								<node id="D.3.2"/>
								<node id="D.3.3"/>
								<node id="F.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Evaluation strategies"/>
								<node label="Nonprocedural languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Special-purpose algebraic systems"/>
								<node label="Special-purpose hardware">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Substitution mechanisms">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.1.4" label="Applications"/>
						<node id="I.1.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.2" label="ARTIFICIAL INTELLIGENCE">
					<isComposedBy>
						<node id="I.2.0" label="General">
							<isComposedBy>
								<node label="Cognitive simulation"/>
								<node label="Philosophical foundations"/>
							</isComposedBy>
						</node>
						<node id="I.2.1" label="Applications and Expert Systems">
							<isRelatedTo>
								<node id="H.4"/>
								<node id="J."/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Cartography"/>
								<node label="Games"/>
								<node label="Industrial automation"/>
								<node label="Law"/>
								<node label="Medicine and science"/>
								<node label="Natural language interfaces"/>
								<node label="Office automation"/>
							</isComposedBy>
						</node>
						<node id="I.2.2" label="Automatic Programming">
							<isRelatedTo>
								<node id="D.1.2"/>
								<node id="F.3.1"/>
								<node id="F.4.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Automatic analysis of algorithms"/>
								<node label="Program modification"/>
								<node label="Program synthesis"/>
								<node label="Program transformation"/>
								<node label="Program verification"/>
							</isComposedBy>
						</node>
						<node id="I.2.3" label="Deduction and Theorem Proving">
							<isRelatedTo>
								<node id="F.4.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Answer/reason extraction"/>
								<node label="Deduction (e.g., natural, rule-based)"/>
								<node label="Inference engines"/>
								<node label="Logic programming"/>
								<node label="Mathematical induction"/>
								<node label="Metatheory">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Nonmonotonic reasoning and belief revision"/>
								<node label="Resolution"/>
								<node label="Uncertainty, ``fuzzy,'' and probabilistic reasoning"/>
							</isComposedBy>
						</node>
						<node id="I.2.4" label="Knowledge Representation Formalisms and Methods">
							<isRelatedTo>
								<node id="F.4.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Frames and scripts"/>
								<node label="Modal logic"/>
								<node label="Predicate logic"/>
								<node label="Relation systems"/>
								<node label="Representation languages"/>
								<node label="Representations (procedural and rule-based)"/>
								<node label="Semantic networks"/>
								<node label="Temporal logic"/>
							</isComposedBy>
						</node>
						<node id="I.2.5" label="Programming Languages and Software">
							<isRelatedTo>
								<node id="D.3.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Expert system tools and techniques"/>
							</isComposedBy>
						</node>
						<node id="I.2.6" label="Learning">
							<isRelatedTo>
								<node id="K.3.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Analogies"/>
								<node label="Concept learning"/>
								<node label="Connectionism and neural nets"/>
								<node label="Induction"/>
								<node label="Knowledge acquisition"/>
								<node label="Language acquisition"/>
								<node label="Parameter learning"/>
							</isComposedBy>
						</node>
						<node id="I.2.7" label="Natural Language Processing">
							<isComposedBy>
								<node label="Discourse"/>
								<node label="Language generation"/>
								<node label="Language models"/>
								<node label="Language parsing and understanding"/>
								<node label="Machine translation"/>
								<node label="Speech recognition and synthesis"/>
								<node label="Text analysis"/>
							</isComposedBy>
						</node>
						<node id="I.2.8" label="Problem Solving, Control Methods, and Search">
							<isRelatedTo>
								<node id="F.2.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Backtracking"/>
								<node label="Control theory"/>
								<node label="Dynamic programming"/>
								<node label="Graph and tree search strategies"/>
								<node label="Heuristic methods"/>
								<node label="Plan execution, formation, and generation"/>
								<node label="Scheduling"/>
							</isComposedBy>
						</node>
						<node id="I.2.9" label="Robotics">
							<isComposedBy>
								<node label="Autonomous vehicles"/>
								<node label="Commercial robots and applications"/>
								<node label="Kinematics and dynamics"/>
								<node label="Manipulators"/>
								<node label="Operator interfaces"/>
								<node label="Propelling mechanisms"/>
								<node label="Sensors"/>
								<node label="Workcell organization and planning"/>
							</isComposedBy>
						</node>
						<node id="I.2.10" label="Vision and Scene Understanding">
							<isRelatedTo>
								<node id="I.4.8"/>
								<node id="I.5"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="3D/stereo scene analysis"/>
								<node label="Architecture and control structures">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Intensity, color, photometry, and thresholding"/>
								<node label="Modeling and recovery of physical attributes"/>
								<node label="Motion"/>
								<node label="Perceptual reasoning"/>
								<node label="Representations, data structures, and transforms"/>
								<node label="Shape"/>
								<node label="Texture"/>
								<node label="Video analysis"/>
							</isComposedBy>
						</node>
						<node id="I.2.11" label="Distributed Artificial Intelligence">
							<isComposedBy>
								<node label="Coherence and coordination"/>
								<node label="Intelligent agents"/>
								<node label="Languages and structures"/>
								<node label="Multiagent systems"/>
							</isComposedBy>
						</node>
						<node id="I.2.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.3" label="COMPUTER GRAPHICS">
					<isComposedBy>
						<node id="I.3.0" label="General"/>
						<node id="I.3.1" label="Hardware Architecture">
							<isRelatedTo>
								<node id="B.4.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Graphics processors"/>
								<node label="Hardcopy devices">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Input devices"/>
								<node label="Parallel processing"/>
								<node label="Raster display devices"/>
								<node label="Storage devices">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Three-dimensional displays">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Vector display devices">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.3.2" label="Graphics Systems">
							<isRelatedTo>
								<node id="C.2.1"/>
								<node id="C.2.4"/>
								<node id="C.3"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Distributed/network graphics"/>
								<node label="Remote systems">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Stand-alone systems">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.3.3" label="Picture/Image Generation">
							<isComposedBy>
								<node label="Antialiasing">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Bitmap and framebuffer operations"/>
								<node label="Digitizing and scanning"/>
								<node label="Display algorithms"/>
								<node label="Line and curve generation"/>
								<node label="Viewing algorithms"/>
							</isComposedBy>
						</node>
						<node id="I.3.4" label="Graphics Utilities">
							<isComposedBy>
								<node label="Application packages"/>
								<node label="Device drivers">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Graphics editors"/>
								<node label="Graphics packages"/>
								<node label="Meta files">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Paint systems"/>
								<node label="Picture description languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Software support"/>
								<node label="Virtual device interfaces"/>
							</isComposedBy>
						</node>
						<node id="I.3.5" label="Computational Geometry and Object Modeling">
							<isComposedBy>
								<node label="Boundary representations"/>
								<node label="Constructive solid geometry (CSG)">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Curve, surface, solid, and object representations"/>
								<node label="Geometric algorithms, languages, and systems"/>
								<node label="Hierarchy and geometric transformations"/>
								<node label="Modeling packages"/>
								<node label="Object hierarchies"/>
								<node label="Physically based modeling"/>
								<node label="Splines"/>
							</isComposedBy>
						</node>
						<node id="I.3.6" label="Methodology and Techniques">
							<isComposedBy>
								<node label="Device independence">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Ergonomics"/>
								<node label="Graphics data structures and data types"/>
								<node label="Interaction techniques"/>
								<node label="Languages"/>
								<node label="Standards"/>
							</isComposedBy>
						</node>
						<node id="I.3.7" label="Three-Dimensional Graphics and Realism">
							<isComposedBy>
								<node label="Animation"/>
								<node label="Color, shading, shadowing, and texture"/>
								<node label="Fractals"/>
								<node label="Hidden line/surface removal"/>
								<node label="Radiosity"/>
								<node label="Raytracing"/>
								<node label="Virtual reality"/>
								<node label="Visible line/surface algorithms"/>
							</isComposedBy>
						</node>
						<node id="I.3.8" label="Applications"/>
						<node id="I.3.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.4" label="IMAGE PROCESSING AND COMPUTER VISION">
					<isComposedBy>
						<node id="I.4.0" label="General">
							<isComposedBy>
								<node label="Image displays"/>
								<node label="Image processing software"/>
							</isComposedBy>
						</node>
						<node id="I.4.1" label="Digitization and Image Capture">
							<isComposedBy>
								<node label="Camera calibration"/>
								<node label="Imaging geometry"/>
								<node label="Quantization"/>
								<node label="Radiometry"/>
								<node label="Reflectance"/>
								<node label="Sampling"/>
								<node label="Scanning"/>
							</isComposedBy>
						</node>
						<node id="I.4.2" label="Compression (Coding)">
							<isRelatedTo>
								<node id="E.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Approximate methods"/>
								<node label="Exact coding">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.4.3" label="Enhancement">
							<isComposedBy>
								<node label="Filtering"/>
								<node label="Geometric correction"/>
								<node label="Grayscale manipulation"/>
								<node label="Registration"/>
								<node label="Sharpening and deblurring">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Smoothing"/>
							</isComposedBy>
						</node>
						<node id="I.4.4" label="Restoration">
							<isComposedBy>
								<node label="Inverse filtering">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Kalman filtering"/>
								<node label="Pseudoinverse restoration">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Wiener filtering">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.4.5" label="Reconstruction">
							<isComposedBy>
								<node label="Series expansion methods"/>
								<node label="Summation methods">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Transform methods"/>
							</isComposedBy>
						</node>
						<node id="I.4.6" label="Segmentation">
							<isComposedBy>
								<node label="Edge and feature detection"/>
								<node label="Pixel classification"/>
								<node label="Region growing, partitioning"/>
								<node label="Relaxation"/>
							</isComposedBy>
						</node>
						<node id="I.4.7" label="Feature Measurement">
							<isComposedBy>
								<node label="Feature representation"/>
								<node label="Invariants"/>
								<node label="Moments"/>
								<node label="Projections"/>
								<node label="Size and shape"/>
								<node label="Texture"/>
							</isComposedBy>
						</node>
						<node id="I.4.8" label="Scene Analysis">
							<isComposedBy>
								<node label="Color"/>
								<node label="Depth cues"/>
								<node label="Motion"/>
								<node label="Object recognition"/>
								<node label="Photometry"/>
								<node label="Range data"/>
								<node label="Sensor fusion"/>
								<node label="Shading"/>
								<node label="Shape"/>
								<node label="Stereo"/>
								<node label="Surface fitting"/>
								<node label="Time-varying imagery"/>
								<node label="Tracking"/>
							</isComposedBy>
						</node>
						<node id="I.4.9" label="Applications"/>
						<node id="I.4.10" label="Image Representation">
							<isComposedBy>
								<node label="Hierarchical"/>
								<node label="Morphological"/>
								<node label="Multidimensional"/>
								<node label="Statistical"/>
								<node label="Volumetric"/>
							</isComposedBy>
						</node>
						<node id="I.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.5" label="PATTERN RECOGNITION">
					<isComposedBy>
						<node id="I.5.0" label="General"/>
						<node id="I.5.1" label="Models">
							<isComposedBy>
								<node label="Deterministic">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Fuzzy set"/>
								<node label="Geometric"/>
								<node label="Neural nets"/>
								<node label="Statistical"/>
								<node label="Structural"/>
							</isComposedBy>
						</node>
						<node id="I.5.2" label="Design Methodology">
							<isComposedBy>
								<node label="Classifier design and evaluation"/>
								<node label="Feature evaluation and selection"/>
								<node label="Pattern analysis"/>
							</isComposedBy>
						</node>
						<node id="I.5.3" label="Clustering">
							<isComposedBy>
								<node label="Algorithms"/>
								<node label="Similarity measures"/>
							</isComposedBy>
						</node>
						<node id="I.5.4" label="Applications">
							<isComposedBy>
								<node label="Computer vision"/>
								<node label="Signal processing"/>
								<node label="Text processing"/>
								<node label="Waveform analysis"/>
							</isComposedBy>
						</node>
						<node id="I.5.5" label="Implementation">
							<isRelatedTo>
								<node id="C.3"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Interactive systems"/>
								<node label="Special architectures"/>
							</isComposedBy>
						</node>
						<node id="I.5.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.6" label="SIMULATION AND MODELING">
					<isRelatedTo>
						<node id="G.3"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="I.6.0" label="General"/>
						<node id="I.6.1" label="Simulation Theory">
							<isComposedBy>
								<node label="Model classification"/>
								<node label="Systems theory"/>
								<node label="Types of simulation (continuous and discrete)">
									<hasNote type="1">The classification is no longer used as of January 1991, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="I.6.2" label="Simulation Languages"/>
						<node id="I.6.3" label="Applications"/>
						<node id="I.6.4" label="Model Validation and Analysis"/>
						<node id="I.6.5" label="Model Development">
							<isComposedBy>
								<node label="Modeling methodologies"/>
							</isComposedBy>
						</node>
						<node id="I.6.6" label="Simulation Output Analysis"/>
						<node id="I.6.7" label="Simulation Support Systems">
							<isComposedBy>
								<node label="Environments"/>
							</isComposedBy>
						</node>
						<node id="I.6.8" label="Types of Simulation">
							<isComposedBy>
								<node label="Animation"/>
								<node label="Combined"/>
								<node label="Continuous"/>
								<node label="Discrete event"/>
								<node label="Distributed"/>
								<node label="Gaming"/>
								<node label="Monte Carlo"/>
								<node label="Parallel"/>
								<node label="Visual"/>
							</isComposedBy>
						</node>
						<node id="I.6.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.7" label="DOCUMENT AND TEXT PROCESSING">
					<isRelatedTo>
						<node id="H.4"/>
						<node id="H.5"/>
					</isRelatedTo>
					<isComposedBy>
						<node id="I.7.0" label="General"/>
						<node id="I.7.1" label="Document and Text Editing">
							<isComposedBy>
								<node label="Document management"/>
								<node label="Languages">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Spelling">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Version control"/>
							</isComposedBy>
						</node>
						<node id="I.7.2" label="Document Preparation">
							<isComposedBy>
								<node label="Desktop publishing"/>
								<node label="Format and notation"/>
								<node label="Hypertext/hypermedia"/>
								<node label="Index generation"/>
								<node label="Languages and systems"/>
								<node label="Markup languages"/>
								<node label="Multi/mixed media"/>
								<node label="Photocomposition/typesetting"/>
								<node label="Scripting languages"/>
								<node label="Standards"/>
							</isComposedBy>
						</node>
						<node id="I.7.3" label="Index Generation">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node id="I.7.4" label="Electronic Publishing">
							<isRelatedTo>
								<node id="H.5.4"/>
								<node id="J.7"/>
							</isRelatedTo>
						</node>
						<node id="I.7.5" label="Document Capture">
							<isRelatedTo>
								<node id="I.4.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Document analysis"/>
								<node label="Graphics recognition and interpretation"/>
								<node label="Optical character recognition (OCR)"/>
								<node label="Scanning"/>
							</isComposedBy>
						</node>
						<node id="I.7.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="I.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="J." label="Computer Applications">
			<isComposedBy>
				<node id="J.0" label="GENERAL"/>
				<node id="J.1" label="ADMINISTRATIVE DATA PROCESSING">
					<isComposedBy>
						<node label="Business"/>
						<node label="Education"/>
						<node label="Financial (e.g., EFTS)"/>
						<node label="Government"/>
						<node label="Law"/>
						<node label="Manufacturing"/>
						<node label="Marketing"/>
						<node label="Military"/>
					</isComposedBy>
				</node>
				<node id="J.2" label="PHYSICAL SCIENCES AND ENGINEERING">
					<isComposedBy>
						<node label="Aerospace"/>
						<node label="Archaeology"/>
						<node label="Astronomy"/>
						<node label="Chemistry"/>
						<node label="Earth and atmospheric sciences"/>
						<node label="Electronics"/>
						<node label="Engineering"/>
						<node label="Mathematics and statistics"/>
						<node label="Physics"/>
					</isComposedBy>
				</node>
				<node id="J.3" label="LIFE AND MEDICAL SCIENCES">
					<isComposedBy>
						<node label="Biology and genetics"/>
						<node label="Health"/>
						<node label="Medical information systems"/>
					</isComposedBy>
				</node>
				<node id="J.4" label="SOCIAL AND BEHAVIORAL SCIENCES">
					<isComposedBy>
						<node label="Economics"/>
						<node label="Psychology"/>
						<node label="Sociology"/>
					</isComposedBy>
				</node>
				<node id="J.5" label="ARTS AND HUMANITIES">
					<isComposedBy>
						<node label="Architecture"/>
						<node label="Arts, fine and performing">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Fine arts"/>
						<node label="Language translation"/>
						<node label="Linguistics"/>
						<node label="Literature"/>
						<node label="Music">
							<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node label="Performing arts (e.g., dance, music)"/>
					</isComposedBy>
				</node>
				<node id="J.6" label="COMPUTER-AIDED ENGINEERING">
					<isComposedBy>
						<node label="Computer-aided design (CAD)"/>
						<node label="Computer-aided manufacturing (CAM)"/>
					</isComposedBy>
				</node>
				<node id="J.7" label="COMPUTERS IN OTHER SYSTEMS">
					<isRelatedTo>
						<node id="C.3"/>
					</isRelatedTo>
					<isComposedBy>
						<node label="Command and control"/>
						<node label="Consumer products"/>
						<node label="Industrial control"/>
						<node label="Military"/>
						<node label="Process control"/>
						<node label="Publishing"/>
						<node label="Real time"/>
					</isComposedBy>
				</node>
				<node id="J.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
		<node id="K." label="Computing Milieux">
			<isComposedBy>
				<node id="K.0" label="GENERAL"/>
				<node id="K.1" label="THE COMPUTER INDUSTRY">
					<isComposedBy>
						<node label="Markets"/>
						<node label="Standards"/>
						<node label="Statistics"/>
						<node label="Suppliers"/>
					</isComposedBy>
				</node>
				<node id="K.2" label="HISTORY OF COMPUTING">
					<isComposedBy>
						<node label="Hardware"/>
						<node label="People"/>
						<node label="Software"/>
						<node label="Systems"/>
						<node label="Theory"/>
					</isComposedBy>
				</node>
				<node id="K.3" label="COMPUTERS AND EDUCATION">
					<isComposedBy>
						<node id="K.3.0" label="General"/>
						<node id="K.3.1" label="Computer Uses in Education">
							<isComposedBy>
								<node label="Collaborative learning"/>
								<node label="Computer-assisted instruction (CAI)"/>
								<node label="Computer-managed instruction (CMI)"/>
								<node label="Distance learning"/>
							</isComposedBy>
						</node>
						<node id="K.3.2" label="Computer and Information Science Education">
							<isComposedBy>
								<node label="Accreditation"/>
								<node label="Computer science education"/>
								<node label="Curriculum"/>
								<node label="Information systems education"/>
								<node label="Literacy"/>
								<node label="Self-assessment"/>
							</isComposedBy>
						</node>
						<node id="K.3.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Accreditation">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Computer literacy">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="K.4" label="COMPUTERS AND SOCIETY">
					<isComposedBy>
						<node id="K.4.0" label="General"/>
						<node id="K.4.1" label="Public Policy Issues">
							<isComposedBy>
								<node label="Abuse and crime involving computers"/>
								<node label="Computer-related health issues"/>
								<node label="Ethics"/>
								<node label="Human safety"/>
								<node label="Intellectual property rights"/>
								<node label="Privacy"/>
								<node label="Regulation"/>
								<node label="Transborder data flow"/>
								<node label="Use/abuse of power"/>
							</isComposedBy>
						</node>
						<node id="K.4.2" label="Social Issues">
							<isComposedBy>
								<node label="Abuse and crime involving computers">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Assistive technologies for persons with disabilities"/>
								<node label="Employment"/>
								<node label="Handicapped persons/special needs">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="K.4.3" label="Organizational Impacts">
							<isComposedBy>
								<node label="Automation"/>
								<node label="Computer-supported collaborative work"/>
								<node label="Employment"/>
								<node label="Reengineering"/>
							</isComposedBy>
						</node>
						<node id="K.4.4" label="Electronic Commerce">
							<isRelatedTo>
								<node id="J.1"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Cybercash, digital cash"/>
								<node label="Distributed commercial transactions"/>
								<node label="Electronic data interchange (EDI)"/>
								<node label="Intellectual property"/>
								<node label="Payment schemes"/>
								<node label="Security"/>
							</isComposedBy>
						</node>
						<node id="K.4.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="K.5" label="LEGAL ASPECTS OF COMPUTING">
					<isComposedBy>
						<node id="K.5.0" label="General"/>
						<node id="K.5.1" label="Hardware/Software Protection">
							<isComposedBy>
								<node label="Copyrights"/>
								<node label="Licensing"/>
								<node label="Patents"/>
								<node label="Proprietary rights"/>
								<node label="Trade secrets">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
						<node id="K.5.2" label="Governmental Issues">
							<isComposedBy>
								<node label="Censorship"/>
								<node label="Regulation"/>
								<node label="Taxation"/>
							</isComposedBy>
						</node>
						<node id="K.5.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Contracts">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Hardware patents">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="K.6" label="MANAGEMENT OF COMPUTING AND INFORMATION SYSTEMS">
					<isComposedBy>
						<node id="K.6.0" label="General">
							<isComposedBy>
								<node label="Economics"/>
							</isComposedBy>
						</node>
						<node id="K.6.1" label="Project and People Management">
							<isComposedBy>
								<node label="Life cycle"/>
								<node label="Management techniques (e.g., PERT/CPM)"/>
								<node label="Staffing"/>
								<node label="Strategic information systems planning"/>
								<node label="Systems analysis and design"/>
								<node label="Systems development"/>
								<node label="Training"/>
							</isComposedBy>
						</node>
						<node id="K.6.2" label="Installation Management">
							<isComposedBy>
								<node label="Benchmarks"/>
								<node label="Computer selection"/>
								<node label="Computing equipment management"/>
								<node label="Performance and usage measurement"/>
								<node label="Pricing and resource allocation"/>
							</isComposedBy>
						</node>
						<node id="K.6.3" label="Software Management">
							<isRelatedTo>
								<node id="D.2.9"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Software development"/>
								<node label="Software maintenance"/>
								<node label="Software process"/>
								<node label="Software selection"/>
							</isComposedBy>
						</node>
						<node id="K.6.4" label="System Management">
							<isComposedBy>
								<node label="Centralization/decentralization"/>
								<node label="Management audit"/>
								<node label="Quality assurance"/>
							</isComposedBy>
						</node>
						<node id="K.6.5" label="Security and Protection">
							<isRelatedTo>
								<node id="D.4.6"/>
								<node id="K.4.2"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Authentication"/>
								<node label="Insurance">
									<hasNote type="1">The classification is no longer used as of January 1991, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Invasive software (e.g., viruses, worms, Trojan horses)"/>
								<node label="Physical security">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Unauthorized access (e.g., hacking, phreaking)"/>
							</isComposedBy>
						</node>
						<node id="K.6.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Insurance">
									<hasNote type="1">The classification is no longer used as of January 1991, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Security">
									<hasNote type="1">The classification is no longer used as of January 1991, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="K.7" label="THE COMPUTING PROFESSION">
					<isComposedBy>
						<node id="K.7.0" label="General"/>
						<node id="K.7.1" label="Occupations"/>
						<node id="K.7.2" label="Organizations"/>
						<node id="K.7.3" label="Testing, Certification, and Licensing"/>
						<node id="K.7.4" label="Professional Ethics">
							<isRelatedTo>
								<node id="K.4"/>
							</isRelatedTo>
							<isComposedBy>
								<node label="Codes of ethics"/>
								<node label="Codes of good practice"/>
								<node label="Ethical dilemmas"/>
							</isComposedBy>
						</node>
						<node id="K.7.m" label="Miscellaneous">
							<isComposedBy>
								<node label="Codes of good practice">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
								<node label="Ethics">
									<hasNote type="2">The classification is no longer used as of January 1998, but the item is still searchable for previously classified documents.</hasNote>
								</node>
							</isComposedBy>
						</node>
					</isComposedBy>
				</node>
				<node id="K.8" label="PERSONAL COMPUTING">
					<isComposedBy>
						<node label="Games">
							<hasNote type="1">The classification is no longer used as of January 1991, but the item is still searchable for previously classified documents.</hasNote>
						</node>
						<node id="K.8.0" label="General">
							<isComposedBy>
								<node label="Games"/>
							</isComposedBy>
						</node>
						<node id="K.8.1" label="Application Packages">
							<isComposedBy>
								<node label="Data communications"/>
								<node label="Database processing"/>
								<node label="Freeware/shareware"/>
								<node label="Graphics"/>
								<node label="Spreadsheets"/>
								<node label="Word processing"/>
							</isComposedBy>
						</node>
						<node id="K.8.2" label="Hardware"/>
						<node id="K.8.3" label="Management/Maintenance"/>
						<node id="K.8.m" label="Miscellaneous"/>
					</isComposedBy>
				</node>
				<node id="K.m" label="MISCELLANEOUS"/>
			</isComposedBy>
		</node>
	</isComposedBy>
</node>
*/
});
//console.log(categories_str);
